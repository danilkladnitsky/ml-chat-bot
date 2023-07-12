import React, { useEffect } from 'react';
import ReactFlow, { Background, Controls, ReactFlowProvider } from 'react-flow-renderer';
import {
  useEdgesState,
  useNodesState,
} from 'reactflow';

import { FlowEdge, FlowNode } from '../../domain/flow';

import { createLayout } from './utils/createLayout';

import 'reactflow/dist/style.css';

type Props = {
  nodes: FlowNode[];
  edges: FlowEdge[];
  onNodeClick: (event: React.MouseEvent, node: FlowNode) => void;
}

const FlowGui = ({ edges, nodes, onNodeClick }: Props) => {
  const [
    flowNodes, setNodes, onNodesChange,
  ] = useNodesState([]);

  const [
    flowEdges, setEdges, onEdgesChange,
  ] = useEdgesState([]);

  useEffect(() => {
    const layoutElements = createLayout(nodes, edges);

    setNodes(layoutElements.nodes);
    setEdges(layoutElements.edges);

  }, [edges, nodes]);

  return (
    <ReactFlowProvider>
      <ReactFlow
        nodes={flowNodes}
        edges={flowEdges}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
        onNodeClick={onNodeClick}
        snapToGrid
        fitView
      >
        <Controls />
        <Background variant="dots" gap={36} size={1} />
      </ReactFlow>
    </ReactFlowProvider>

  );
};

export default FlowGui;
