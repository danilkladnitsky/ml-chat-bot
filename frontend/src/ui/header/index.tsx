import React from 'react';
import { Button, Text } from '@mantine/core';

import styles from './styles.module.scss';

const Header = () => {

  const handleRedirect = () => {
    window.location.replace('https://github.com/danyaisyourhomie/ml-chat-bot');
  };

  return (
    <div className={styles.header}>
      <Text variant={'gradient'}
        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
        ta="center"
        fz="xl"
        fw={600}
      >ML Bot App | version sha: {ENV_VARS.VERSION || '0.0.1'}
      </Text>
      <Button onClick={handleRedirect}>
        Source code
      </Button>
    </div>
  );
};

export default Header;
