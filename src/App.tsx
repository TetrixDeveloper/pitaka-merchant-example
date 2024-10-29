import React from 'react';
import { CssBaseline } from '@mui/material';
import AppAuth0Provider from 'containers/AppAuth0Provider';
import AppQueryProviderContainer from 'containers/AppQueryProviderContainer';
import Main from 'features/main';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <AppAuth0Provider>
      <AppQueryProviderContainer>
        <SnackbarProvider maxSnack={3}>
          <CssBaseline />
          <Main />
        </SnackbarProvider>
      </AppQueryProviderContainer>
    </AppAuth0Provider>
  );
}

export default App;
