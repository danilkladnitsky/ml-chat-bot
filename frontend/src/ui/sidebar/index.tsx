import React from 'react';
import { Button, Card, CloseButton, Group, Stack, Text } from '@mantine/core';
import usePredict from 'api/hooks/ml/use-predict';
import { useMlStore } from 'store/ml.store';
import { useTelegramStore } from 'store/telegram.store';
import { formatDate } from 'utils/formatDate';

import styles from './styles.module.scss';

const Sidebar = () => {
  const { selectedMessage, setSelectedMessage, messages } = useTelegramStore();
  const { predictionResult } = useMlStore();

  const { mutate: predictMessage, isLoading } = usePredict({
    messageId: selectedMessage?.id,
    features: ['textLength', 'hasAttachments', 'buttonsNumber'],
  });

  if (!selectedMessage) {
    return;
  }

  const handleChildSelect = (messageId: Id) => {
    const message = messages.find(message => message.id === messageId);
    if (!message) {
      return;
    }

    setSelectedMessage(message);
  };

  const handlePredictionSubmit = () => {
    predictMessage();

  };

  const closeSidebar = () => {
    setSelectedMessage(null);
  };

  const { text, created_at, children, id: currentMessageId } = selectedMessage;

  const predict = predictionResult
    .find(p => p.id === currentMessageId)?.result;

  const predictScore = predictionResult ? '👌' : '👎';

  return (
    <Stack className={styles.sidebar}>
      <Group className={styles.sidebarHeader}>
        <Text variant={'gradient'}
          gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
          fz="md"
          fw={500}
        >
        Превью сообщения
        </Text>
        <CloseButton onClick={closeSidebar} size="xl" iconSize={20} />
      </Group>
      <Card shadow="sm" padding="sm" radius="md" withBorder>
        <Group position="apart" mt="xs" mb="xs">
          <Text weight={500}>{text}</Text>
          <Text size={'lg'}>
            {predict ? predictScore : '❓'}
          </Text>
        </Group>
        <Text size="sm" color="dimmed">
          {formatDate(created_at)}
        </Text>

        {
          children?.map((child) => <Button
            variant="light"
            color="blue"
            fullWidth mt="md"
            radius="md"
            key={child.id}
            onClick={() => handleChildSelect(child.id)}
          >
            {child.keyboard_link || child.text}
          </Button>)
        }

      </Card>
      <div className={styles.analysisBtn}>
        <Button variant={'outline'} color="orange" onClick={handlePredictionSubmit} loading={isLoading}>
        Предсказать
        </Button>
      </div>
    </Stack>
  );
};

export default Sidebar;
