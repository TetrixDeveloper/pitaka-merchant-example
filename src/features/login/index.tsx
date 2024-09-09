import { useAuth0 } from "@auth0/auth0-react";
import { Button, Stack, Typography } from "@mui/material";

function Login() {
  const { loginWithRedirect, logout } = useAuth0();

  const handleLoginWithGoogle = async () => await loginWithRedirect();

  return (
    <Stack
      alignItems="center"
      sx={{
        "& .MuiTextField-root": {
          margin: 2,
          width: "300px",
        },
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        color="#6b7280"
        mt="1em"
        textAlign="center"
      >
        Connect your Pitaka account to sign in.
      </Typography>
      <Button
        variant="contained"
        onClick={handleLoginWithGoogle}
        size="large"
        sx={{
          width: "300px",
          margin: 4,
          padding: 1.5,
        }}
      >
        Single Sign-On (SSO)
      </Button>
    </Stack>
  );
}

export default Login;
