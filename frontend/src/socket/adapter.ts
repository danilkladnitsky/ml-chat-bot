import { useEffect } from 'react';
import { socket } from 'socket';
import { useSocketStore } from 'store/socket.store';

export const useSocketAdapter = (
) => {
  const { setIsConnected, onConnect, onDisconnect, onEvent } = useSocketStore();

  useEffect(() => {
    socket.on('connect', () => {
      onConnect();
      setIsConnected(true);
    });
    socket.on('disconnect', () => {
      onDisconnect();
      setIsConnected(false);
    });

    socket.on('event', onEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('event', onEvent);
    };
  }, []);
};
