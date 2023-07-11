import { TelegramMessage } from './telegram';

export type FlowEdge = {
  id: string;
  source: Id;
  target: Id;
  label: string;
  data: {
      originalMessage: TelegramMessage;
  };
}

export type FlowNode = {
  id: Id;
  data: {
    originalMessage: TelegramMessage;
    label: string;
  };
  position: {
    x: number;
    y: number;
  }
}

export const createNodesFromTelegramMessages =
  (messages: TelegramMessage[]): FlowNode[] => {
    return messages.map((message) => ({
      data: {
        originalMessage: message,
        label: message.text,
      },
      id: message.id.toString(),
      position: {
        x: 0,
        y: 0,
      },
    }));
  };

export const createEdgesFromTelegramMessages =
    (messages: TelegramMessage[]): FlowEdge[] => {
      return messages.reduce((edges: FlowEdge[], message) => {
        const hasChildren = message.children.length > 0;

        if (!hasChildren) {
          return edges;
        }

        const edgesToChildren: FlowEdge[] = message.children.map(child => ({
          data: { originalMessage: message },
          source: message.id.toString(),
          target: child.id.toString(),
          id: `${message.id}-${child.id}`,
          label: child.keyboard_link || child.text,
        }));

        edges.push(...edgesToChildren);

        return edges;
      }, []);
    };
