import React, { useEffect } from 'react';
import { ReactFlowProvider } from 'react-flow-renderer';
import { Loader } from '@mantine/core';
import { useTelegramStore } from 'store/telegram.store';

import { FlowNode } from 'domain/flow';

import useTelegramMessages from '../../api/hooks/telegram/use-telegram-messages';
import { useFlowStore } from '../../store/flow.store';

import FlowGui from './FlowGui';

import 'reactflow/dist/style.css';
import styles from './styles.module.scss';

const FlowEditor = () => {
  const { edges, nodes } = useFlowStore();
  const { setSelectedMessage } = useTelegramStore();

  const { mutate: fetchTelegramMessages, isLoading } = useTelegramMessages();

  const handleNodeSelect = (event: React.MouseEvent, data: FlowNode) => {
    setSelectedMessage(data.data.originalMessage);
  };

  useEffect(() => {
    fetchTelegramMessages();
  }, []);

  return (
    <div className={styles.editor}>
      <ReactFlowProvider>
        {
          isLoading
            ? <Loader />
            : <FlowGui
              edges={edges}
              nodes={nodes}
              onNodeClick={handleNodeSelect}
            />
        }
      </ReactFlowProvider>
    </div>

  );
};

export default FlowEditor;
