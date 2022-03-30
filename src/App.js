import './App.css';
import React, { useReducer } from 'react';
import useAlertsReducer from './useAlertsReducer';
import AlertManager from './AlertManager';
import AlertExample from './AlertExample';
import { Stack } from '@mui/material';


function App() {
  const [state, dispatch] = useReducer(useAlertsReducer, { activeAlerts: [] })
  return (
    <div className="appContainer">
      <div>
        <Stack gap={2}/>
        <AlertManager alerts={state.activeAlerts} dispatch={dispatch} />
        <AlertExample dispatch={dispatch}/>
      </div>
    </div>
  );
}

export default App;
