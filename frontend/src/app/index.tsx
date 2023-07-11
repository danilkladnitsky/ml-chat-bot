import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import FlowEditor from '../ui/flow';

import styles from './styles.module.scss';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.app}>
        <FlowEditor />
      </div>
    </QueryClientProvider>

  );
};

export default App;
