import { Box, Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
const LogoutButton = () => {
  const { logout } = useAuth0();
  const handleLogout = () => {
    localStorage.clear();
    logout({ openUrl: false });
  };

  return (
    <Box sx={{ flex: 1 }}>
      <Button variant="outlined" onClick={handleLogout} size="large">
        Logout
      </Button>
    </Box>
  );
};
export default LogoutButton;
