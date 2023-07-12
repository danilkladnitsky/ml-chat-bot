import { create } from 'zustand';

import { TelegramMessage } from '../domain/telegram';

type State = {
  messages: TelegramMessage[];
  selectedMessage: TelegramMessage | null;
}

type Actions = {
  setMessages: (messages: TelegramMessage[]) => void;
  setSelectedMessage: (message: TelegramMessage | null) => void;
}

export const useTelegramStore = create<State & Actions>((set) => ({
  messages: [],
  selectedMessage: null,
  setMessages: (messages: TelegramMessage[]) => {
    set({ messages });
  },
  setSelectedMessage: (selectedMessage: TelegramMessage | null) => {
    set({ selectedMessage });
  },
}));
