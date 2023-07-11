import { useMutation } from 'react-query';

import { useTelegramStore } from '../../../store/telegram.store';
import Api from '../../core';
import { API_ROUTES } from '../../routes';

const useTelegramMessages = () => {
  const setMessages = useTelegramStore((state) => state.setMessages);

  return useMutation(API_ROUTES.TELEGRAM.GET_MESSAGES(),
    async () => Api.fetchTelegramMessages(),
    {
      onSuccess: (data) => {
        setMessages(data);
      },
    });
};

export default useTelegramMessages;
