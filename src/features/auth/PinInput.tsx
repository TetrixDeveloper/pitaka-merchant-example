import React, { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useVerifyPinMutation } from "./mutations";

function PinInput() {
  const { mutateAsync, isPending } = useVerifyPinMutation();

  const [pin, setPin] = useState("");

  const handleClick = async () => {
    try {
      await mutateAsync(pin);
      window.location.reload();
    } catch (error) {
      alert("Wrong Pin");
    }
  };

  return (
    <Stack flexDirection="column" mt="1em">
      <Typography variant="h6" mb={2}>
        Enter Pin
      </Typography>
      <Box mb={4} width="100%">
        <TextField
          value={pin}
          hiddenLabel
          type="password"
          id="pin-input"
          variant="outlined"
          size="small"
          fullWidth
          onChange={(e) => setPin(e.target.value)}
        />
      </Box>
      <Button
        variant="contained"
        onClick={handleClick}
        size="large"
        disabled={isPending}
      >
        Submit
      </Button>
    </Stack>
  );
}

export default React.memo(PinInput);
