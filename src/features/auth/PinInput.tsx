import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  AppBar,
  IconButton,
  Paper,
  TextField,
} from '@mui/material';
import { useVerifyPinMutation } from './mutations';
import { useSnackbar } from 'notistack';
import { ArrowBack } from '@mui/icons-material';
import LogoutButton from 'features/main/logout';

function PinInput() {
  const { mutateAsync } = useVerifyPinMutation();
  const { enqueueSnackbar } = useSnackbar();

  const [pin, setPin] = useState(new Array(6).fill(''));

  const handleClick = async (pinString: string) => {
    try {
      await mutateAsync(pinString);
      window.location.reload();
    } catch (error) {
      enqueueSnackbar(`Wrong Pin!: ${error}`, {
        variant: 'error',
      });
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value) && value.length <= 6) {
      setPin([...value.split(''), ...new Array(6 - value.length).fill('')]);
      if (value.length === 6) {
        handleClick(value);
      }
    }
  };

  return (
    <Container maxWidth="sm" sx={{ height: '100vh', p: 0 }}>
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <AppBar
          position="absolute"
          sx={{
            bgcolor: '#1a2b4b',
            pb: 20,
            zIndex: 0,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
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
          ></Box>
        </AppBar>

        <Paper
          sx={{
            p: 3,
            mt: 20,
            borderRadius: 4,
            flexGrow: 0,
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h6" sx={{ mb: 1, textAlign: 'left' }}>
            Log in to pay with Pitaka
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{ textAlign: 'left' }}
          >
            Enter your Pincode
          </Typography>

          <Box
            display="flex"
            gap={3}
            mt={4}
            mb={3}
            justifyContent="center"
            position="relative"
            sx={{
              backgroundColor: 'transparent',
              border: 'none',
              boxShadow: 'none',
            }}
          >
            {pin.map((digit, index) => (
              <Box
                key={index}
                sx={{
                  width: '15px',
                  height: '15px',
                  borderRadius: '50%',
                  backgroundColor: digit ? '#34466F' : '#ddd',
                  border: '1px solid #ccc',
                }}
              />
            ))}
            <TextField
              value={pin.join('')}
              onChange={handleInput}
              type="password"
              variant="outlined"
              size="small"
              fullWidth
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0,
              }}
            />
          </Box>
        </Paper>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'flex-end',
            paddingBottom: 4,
          }}
        >
          <LogoutButton />
        </Box>
      </Box>
    </Container>
  );
}

export default React.memo(PinInput);
