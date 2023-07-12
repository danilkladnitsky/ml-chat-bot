import { useEffect } from 'react';
import { socket } from 'socket';
import { useMlStore } from 'store/ml.store';
import { useSocketStore } from 'store/socket.store';

export const useSocketAdapter = (
) => {
  const { setIsConnected, onConnect, onDisconnect, onEvent } = useSocketStore();
  const { setPredictionResult } = useMlStore();

  useEffect(() => {
    socket.on('connect', () => {
      onConnect();
      setIsConnected(true);
    });
    socket.on('disconnect', () => {
      onDisconnect();
      setIsConnected(false);
    });

    socket.on('event', (data) => {
      setPredictionResult(data);
    });

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('event', onEvent);
    };
  }, []);
};
