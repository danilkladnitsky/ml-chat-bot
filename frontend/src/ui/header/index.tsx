import React from 'react';
import { Button, Text } from '@mantine/core';

import styles from './styles.module.scss';

const Header = () => {

  const handleAnalysisSubmit = () => {
  };

  return (
    <div className={styles.header}>
      <Text variant={'gradient'}
        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
        ta="center"
        fz="xl"
        fw={600}
      >ML Bot App
      </Text>
      <Button onClick={handleAnalysisSubmit}>
        Анализировать
      </Button>
    </div>
  );
};

export default Header;
