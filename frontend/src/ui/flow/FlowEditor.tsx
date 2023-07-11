import React, { useEffect } from 'react';
import { ReactFlowProvider } from 'react-flow-renderer';
import { Button, Loader } from '@mantine/core';
import usePredict from 'api/hooks/telegram/use-predict';

import useTelegramMessages from '../../api/hooks/telegram/use-telegram-messages';
import { useFlowStore } from '../../store/flow.store';

import FlowGui from './FlowGui';

import 'reactflow/dist/style.css';
import styles from './styles.module.scss';

const FlowEditor = () => {
  const { edges, nodes } = useFlowStore();

  const { mutate: fetchTelegramMessages, isLoading } = useTelegramMessages();
  const { mutate: requestPredictData } = usePredict();

  useEffect(() => {
    fetchTelegramMessages();
  }, []);

  const handleAnalysisSubmit = () => {
    requestPredictData();
  };

  return (
    <div className={styles.editorWrapper}>
      <div className={styles.editor}>
        <ReactFlowProvider>
          {isLoading ? <Loader /> : <FlowGui edges={edges} nodes={nodes} />}
        </ReactFlowProvider>
      </div>
      <Button onClick={handleAnalysisSubmit} className={styles.analysisBtn}>
        Анализировать
      </Button>
    </div>

  );
};

export default FlowEditor;
