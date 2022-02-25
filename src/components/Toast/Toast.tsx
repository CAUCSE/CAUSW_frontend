import { observer } from 'mobx-react-lite';
import { useCallback, useEffect, useState } from 'react';

import { ToastView } from './styled';
import { ToastMessage } from './ToastUi';

import { useRootStore } from '@/stores/RootStore';

export const Toast: React.FC = observer(() => {
  const {
    ui: {
      toast: { messages, duration },
    },
  } = useRootStore();
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState<ToastMessage | undefined>(undefined);

  useEffect(() => {
    if (messages.length && !message) {
      setMessage(messages.shift());
      setVisible(true);
    } else if (messages.length && message && visible) setVisible(false);
  }, [messages.length, message, visible]);

  const handleClose = useCallback((event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setVisible(false);
  }, []);

  const handleExited = useCallback(
    (message?: ToastMessage) => () => {
      if (message && 'function' === typeof message.onClose) message.onClose();
      setMessage(undefined);
    },
    [],
  );

  return (
    <ToastView
      open={visible}
      key={message?.key}
      message={message?.message}
      autoHideDuration={duration}
      onClose={handleClose}
      TransitionProps={{ onExited: handleExited(message) }}
    />
  );
});
