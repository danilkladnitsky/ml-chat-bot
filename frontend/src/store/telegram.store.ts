import { create } from 'zustand';

import { TelegramMessage } from '../domain/telegram';

type State = {
    messages: TelegramMessage[];
}

type Actions = {
    setMessages: (messages: TelegramMessage[]) => void;
}

export const useTelegramStore = create<State & Actions>((set) => ({
  messages: [],
  setMessages: (messages: TelegramMessage[]) => {
    set({ messages });
  },
}));
