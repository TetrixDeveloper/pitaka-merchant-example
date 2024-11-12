import { CssBaseline } from "@mui/material";

import AppAuth0Provider from "containers/AppAuth0Provider";
import AppQueryProviderContainer from "containers/AppQueryProviderContainer";
import Main from "features/main";

function App() {
  return (
    <AppAuth0Provider>
      <AppQueryProviderContainer>
        <CssBaseline />
        <Main />
      </AppQueryProviderContainer>
    </AppAuth0Provider>
  );
}

export default App;
