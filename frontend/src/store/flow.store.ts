import { create } from 'zustand';

import { FlowEdge, FlowNode } from '../domain/flow';

type State = {
    edges: FlowEdge[];
    nodes: FlowNode[];
}

type Actions = {
    setFlowEdges: (edges: FlowEdge[]) => void;
    setFlowNodes: (nodes: FlowNode[]) => void;
}

export const useFlowStore = create<State & Actions>((set) => ({
  edges: [],
  nodes: [],
  setFlowEdges: (edges: FlowEdge[]) => {
    set({ edges });
  },
  setFlowNodes: (nodes: FlowNode[]) => {
    set({ nodes });
  },
}));
