import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { useSocketAdapter } from 'socket/adapter';
import { useTelegramStore } from 'store/telegram.store';
import Header from 'ui/header';
import Sidebar from 'ui/sidebar';

import FlowEditor from '../ui/flow/FlowEditor';

import styles from './styles.module.scss';

const queryClient = new QueryClient();

const App = () => {
  useSocketAdapter();
  const selectedMessage = useTelegramStore(state => state.selectedMessage);

  return (
    <div className={styles.app}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <div className={styles.appLayout}>
          <FlowEditor />
          {selectedMessage && <Sidebar />}
        </div>
      </QueryClientProvider>
    </div>
  );
};

export default App;
