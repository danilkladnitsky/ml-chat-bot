export const API_ROUTES = {
  TELEGRAM: {
    GET_MESSAGES: () => 'telegram/messages',
    MESSAGE_BY_ID: (id: Id) => `telegram/message/${id}`,
    CREATE_MESSAGE: () => 'telegram/messages',
  },
  ML: {
    RUN_MESSAGE_PREDICT: (id: Id) =>`ml/predict/${id}`,
  },
};
