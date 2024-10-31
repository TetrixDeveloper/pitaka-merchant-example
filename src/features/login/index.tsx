import { useState, useEffect } from "react";
import { Button, Typography, Box, Card, CardContent } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {

  const [pending, setPending] = useState(true);
  useEffect(() => {

    const searchParams = new URLSearchParams(window.location.search);
    const idParam = searchParams.get('id');
    const returnUrlParam = searchParams.get('returnUrl');
    const amountParam = searchParams.get('amount');
    const descriptionParam = searchParams.get('description');
    if (amountParam) 
    {
      setPending(false);
      const url = process.env.REACT_APP_AUTH0_REDIRECT_URI+`/?id=${idParam}&amount=${amountParam}&description=${descriptionParam}&returnUrl=${returnUrlParam}`;
      localStorage.setItem('transactionUrl', url);
    }

  }, []);



  const { loginWithRedirect } = useAuth0();

  const handleLoginWithGoogle = async () => await loginWithRedirect();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#0f1e33',
        padding: 2,
        border: '3px solid #0f1e33',  
        borderRadius: '8px', 
      }}
    >
      <Card sx={{ maxWidth: 400, backgroundColor: '#e8f1fa', padding: 2 }}>
        <CardContent>
        <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
          Connect your Pitaka account to sign in.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
          <Button
            variant="contained" color="primary"
            onClick={handleLoginWithGoogle}
            
            disabled={pending}
          >
            Single Sign-On (SSO)
          </Button>
          </Box>
      </CardContent>
      </Card>
    </Box>
  );
}

export default Login;
