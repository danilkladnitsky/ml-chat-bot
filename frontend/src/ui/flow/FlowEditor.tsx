import React, { useEffect } from 'react';
import { ReactFlowProvider } from 'react-flow-renderer';
import { Loader } from '@mantine/core';

import useTelegramMessages from '../../api/hooks/telegram/use-telegram-messages';
import { useFlowStore } from '../../store/flow.store';

import FlowGui from './FlowGui';

import 'reactflow/dist/style.css';
import styles from './styles.module.scss';

const FlowEditor = () => {
  const { edges, nodes } = useFlowStore();

  const { mutate: fetchTelegramMessages, isLoading } = useTelegramMessages();

  useEffect(() => {
    fetchTelegramMessages();
  }, []);

  const hasData = nodes.length && edges.length;

  return (
    <div className={styles.wrapper}>
      <ReactFlowProvider>
        {isLoading ? <Loader /> : <FlowGui edges={edges} nodes={nodes} />}
      </ReactFlowProvider>
    </div>

  );
};

export default FlowEditor;
