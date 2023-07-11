import { useMutation } from '@tanstack/react-query';

import { createEdgesFromTelegramMessages, createNodesFromTelegramMessages } from '../../../domain/flow';
import { useFlowStore } from '../../../store/flow.store';
import { useTelegramStore } from '../../../store/telegram.store';
import Api from '../../core';

const useTelegramMessages = () => {
  const setMessages = useTelegramStore((state) => state.setMessages);
  const { setFlowEdges, setFlowNodes } = useFlowStore();

  return useMutation(async () => await Api.fetchTelegramMessages(), {
    onSuccess: (data) => {
      setMessages(data);

      const edges = createEdgesFromTelegramMessages(data);
      const nodes = createNodesFromTelegramMessages(data);
      setFlowEdges(edges);
      setFlowNodes(nodes);
    },
  });
};

export default useTelegramMessages;
