import { useMutation } from '@tanstack/react-query';

import Api from '../../core';

type Query = {
  messageId?: Id;
  features: string[];
}
const usePredict = ({ features, messageId }: Query) => {
  return useMutation(async () => {

    if (!messageId) return;

    return await Api.fetchPredict(messageId, features);
  });
};

export default usePredict;
