import React, { useEffect } from 'react';
import { ReactFlowProvider } from 'react-flow-renderer';
import { Loader } from '@mantine/core';
import { useMlStore } from 'store/ml.store';
import { useTelegramStore } from 'store/telegram.store';

import { FlowNode } from 'domain/flow';

import useTelegramMessages from '../../api/hooks/telegram/use-telegram-messages';
import { useFlowStore } from '../../store/flow.store';

import { highlightEdgesByPredict } from './utils/highlightEdgesByPredict';
import FlowGui from './FlowGui';

import 'reactflow/dist/style.css';
import styles from './styles.module.scss';

const FlowEditor = () => {
  const { edges, nodes } = useFlowStore();
  const { setSelectedMessage } = useTelegramStore();
  const { predictionResult } = useMlStore();

  const { mutate: fetchTelegramMessages, isLoading } = useTelegramMessages();

  const handleNodeSelect = (event: React.MouseEvent, data: FlowNode) => {
    setSelectedMessage(data.data.originalMessage);
  };

  useEffect(() => {
    fetchTelegramMessages();
  }, []);

  const processesEdges = highlightEdgesByPredict(edges, predictionResult);
  return (
    <div className={styles.editor}>
      <ReactFlowProvider>
        {
          isLoading
            ? <Loader />
            : <FlowGui
              edges={processesEdges}
              nodes={nodes}
              onNodeClick={handleNodeSelect}
            />
        }
      </ReactFlowProvider>
    </div>

  );
};

export default FlowEditor;
