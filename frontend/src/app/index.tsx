import React from 'react';

import FlowEditor from '../ui/flow';

import styles from './styles.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <FlowEditor />
    </div>
  );
};

export default App;
