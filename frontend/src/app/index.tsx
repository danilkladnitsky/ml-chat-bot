import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import FlowEditor from '../ui/flow/FlowEditor';

import styles from './styles.module.scss';

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className={styles.app}>
      <QueryClientProvider client={queryClient}>
        <FlowEditor />
      </QueryClientProvider>
    </div>
  );
};

export default App;
