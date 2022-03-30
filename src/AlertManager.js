import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const AlertManager = ({alerts, dispatch}) => {
    const hasAlerts = alerts.length > 0;

    return hasAlerts &&
      <Box sx={{ zIndex: 'modal', position: 'absolute', top: 0, right: 0}} >
        {alerts.map(a =>
            <Alert
              key={a.id}
              severity={a.alertType}
              variant="filled">
                {a.title && <AlertTitle>{a.title}</AlertTitle>}
                <Link href={a.link} target="_blank" rel="noreferrer">{a.text} </Link>
            </Alert>
        )}
      </Box>
}

export default AlertManager;
