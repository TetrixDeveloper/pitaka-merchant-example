import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { ArrowBack, Store } from '@mui/icons-material';
import { CURRENCY, formatCurrencyAmount } from 'features/utils';

function Login() {
  const { loginWithRedirect } = useAuth0();

  const searchParams = new URLSearchParams(window.location.search);
  const amountParam = searchParams.get('amount');
  const descriptionParam = searchParams.get('description');

  const handleLoginWithGoogle = async () =>
    await loginWithRedirect({
      appState: {
        returnTo: window.location.pathname,
      },
    });

  return (
    <Container maxWidth="sm" sx={{ height: '100vh', bgcolor: '#f5f5f5', p: 0 }}>
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <AppBar position="static" sx={{ bgcolor: '#1a2b4b', pb: 20 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              p: 2,
            }}
          >
            <IconButton edge="start" color="inherit" sx={{ mt: 0 }}>
              <ArrowBack />
            </IconButton>
            <Typography variant="h6" sx={{ mt: 2, mb: 2, ml: 2 }}>
              Pitaka Login
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2,
            }}
          >
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Paper
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 1,
                  borderRadius: 20,
                  bgcolor: '#F4F3FF',
                }}
              >
                <Store sx={{ fontSize: 16 }} />
                <Typography variant="body2">Merchant</Typography>
              </Paper>

              <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                {descriptionParam}
              </Typography>

              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                {formatCurrencyAmount(Number(amountParam), CURRENCY.PHP)}
              </Typography>
            </Box>
          </Box>
        </AppBar>

        <Paper sx={{ p: 3, m: 2, mt: -15, borderRadius: 4, flexGrow: 0 }}>
          <Typography variant="h6" sx={{ mb: 2, textAlign: 'left' }}>
            Log in to pay with Pitaka
          </Typography>

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              bgcolor: '#5d7199',
              borderRadius: 2,
              py: 1.5,
              '&:hover': { bgcolor: '#4a5a7a' },
            }}
            onClick={handleLoginWithGoogle}
          >
            Next
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login;
