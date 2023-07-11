import { useMutation } from '@tanstack/react-query';

import Api from '../../core';

const usePredict = () => {
  return useMutation(async () => await Api.fetchPredict());
};

export default usePredict;
