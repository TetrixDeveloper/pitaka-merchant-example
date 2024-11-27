import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import { Auth0ContextInterface, User, withAuth0 } from '@auth0/auth0-react';

import { setPitakaToken } from 'graphQLClient';

import PayMerchant from 'features/merchant/PayMerchant';
import Login from 'features/login';
import { useGetCurrentUserDetailsQuery } from 'features/auth/queries';
import PinInput from 'features/auth/PinInput';

interface MainProps {
  auth0: Auth0ContextInterface<User>;
}

function Main({ auth0 }: MainProps) {
  const { isAuthenticated, isLoading } = auth0;
  const { data } = useGetCurrentUserDetailsQuery();

  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const isPinVerified = Boolean(localStorage.getItem('x-pitaka-token'));


  const renderComponents = useCallback(() => {
    if (isUserAuthenticated && isPinVerified) {
      setPitakaToken(localStorage.getItem('x-pitaka-token') || '');
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          minWidth: '50vw',
          padding: 4,
          border: 'none',
          borderRadius: 2,
          textAlign: 'center',
        }}
      >
        {renderComponents()}
      </Box>

    </Container>
  );
}

export default withAuth0(Main);
