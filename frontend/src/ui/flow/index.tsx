import React from 'react';
import ReactFlow, { Background, Controls, ReactFlowProvider } from 'react-flow-renderer';

import 'reactflow/dist/style.css';
import styles from './styles.module.scss';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const FlowEditor = () => {
  return (
    <ReactFlowProvider>
      <ReactFlow
        className={styles.wrapper}
        nodes={initialNodes}
        edges={initialEdges}
      >
        <Controls />
        <Background variant="dots" gap={36} size={1} />
      </ReactFlow>
    </ReactFlowProvider>

  );
};

export default FlowEditor;
