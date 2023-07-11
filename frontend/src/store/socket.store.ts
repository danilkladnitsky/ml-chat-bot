import { create } from 'zustand';

type State = {
    isConnected: boolean;
}

type Actions = {
    setIsConnected: (status: boolean) => void;
    onConnect: () => void;
    onDisconnect: () => void;
    onEvent: (payload: any) => void;
}

export const useSocketStore = create<State & Actions>((set) => ({
  isConnected: false,
  setIsConnected: (isConnected) => {
    set({ isConnected });
  },
}));
