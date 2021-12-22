import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import MainForm from './MainForm';

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <MainForm />
    </StyledEngineProvider>
  );
}
