'use client';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import useStore from '@/services/store/useStore';

const GlobalToast = () => {
  const { notification, clearNotification } = useStore();

  return (
    <Snackbar
      open={!!notification}
      autoHideDuration={4000}
      onClose={clearNotification}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      {notification ? (
        <Alert severity={notification.severity} onClose={clearNotification} variant="filled">
          {notification.message}
        </Alert>
      ) : undefined}
    </Snackbar>
  );
};

export default GlobalToast;
