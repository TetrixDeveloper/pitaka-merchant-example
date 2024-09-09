import { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { Auth0ContextInterface, User, withAuth0 } from "@auth0/auth0-react";

import PayMerchant from "features/merchant/PayMerchant";
import Login from "features/login";
import Logo from "assets/PitakaDA5IconDark.png";
import { useGetCurrentUserDetailsQuery } from "features/auth/queries";

interface MainProps {
  auth0: Auth0ContextInterface<User>;
}

function Main({ auth0 }: MainProps) {
  const { isAuthenticated, isLoading } = auth0;
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const { data } = useGetCurrentUserDetailsQuery();

  useEffect(() => {
    if (!isAuthenticated && !isLoading && !data) {
      setIsUserAuthenticated(false);
    } else {
      setIsUserAuthenticated(true);
    }
  }, [isAuthenticated, isLoading, setIsUserAuthenticated]);

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
      <img src={Logo} width={300} alt="logo" />
      <Box
        sx={{
          minWidth: "50vw",
          padding: 4,
          border: "2px solid #eee",
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        {isUserAuthenticated ? <PayMerchant /> : <Login />}
      </Box>
    </Container>
  );
}

export default withAuth0(Main);
