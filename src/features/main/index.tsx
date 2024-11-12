import { useCallback, useEffect, useState } from "react";
import { Box, Button, Container } from "@mui/material";
import {
  Auth0ContextInterface,
  User,
  withAuth0,
  useAuth0,
} from "@auth0/auth0-react";
import { setPitakaToken } from "graphQLClient";

import PayMerchant from "features/merchant/PayMerchant";
import Login from "features/login";
import { useGetCurrentUserDetailsQuery } from "features/auth/queries";
import PinInput from "features/auth/PinInput";

import Logo from "assets/DtakaLogo.png";

interface MainProps {
  auth0: Auth0ContextInterface<User>;
}

function Main({ auth0 }: MainProps) {
  const { isAuthenticated, isLoading } = auth0;
  const { data } = useGetCurrentUserDetailsQuery();

  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const isPinVerified = Boolean(localStorage.getItem("x-pitaka-token"));

  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({ openUrl: false });
  };

  const renderComponents = useCallback(() => {
    if (isUserAuthenticated && isPinVerified) {
      setPitakaToken(localStorage.getItem("x-pitaka-token") || "");
      return <PayMerchant />;
    }
    if (isAuthenticated && !isPinVerified) {
      return <PinInput />;
    }

    return <Login />;
  }, [isAuthenticated, isPinVerified, isUserAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated && !isLoading && !data) {
      setIsUserAuthenticated(false);
    } else {
      setIsUserAuthenticated(true);
    }
  }, [data, isAuthenticated, isLoading, setIsUserAuthenticated]);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20vh auto",
        flexDirection: "column",
      }}
    >
      <Box mb="1em">
        <img src={Logo} width={300} alt="logo" />
      </Box>
      <Box
        sx={{
          minWidth: "50vw",
          padding: 4,
          border: "2px solid #eee",
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        {renderComponents()}
      </Box>
      {isUserAuthenticated && (
        <Box mt="1em">
          <Button
            variant="outlined"
            onClick={handleLogout}
            size="large"
            sx={{ marginTop: 2 }}
          >
            Logout
          </Button>
        </Box>
      )}
    </Container>
  );
}

export default withAuth0(Main);
