import React from 'react';
import { Button, Text, TextInput } from '@mantine/core';
import usePredict from 'api/hooks/telegram/use-predict';

import styles from './styles.module.scss';

const Header = () => {
  const { mutate: requestPredictData } = usePredict();

  const handleAnalysisSubmit = () => {
    requestPredictData();
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
