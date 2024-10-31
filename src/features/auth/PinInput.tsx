import React, { useState } from "react";
import { Box, Typography,Card, CardContent } from "@mui/material";
import { useVerifyPinMutation } from "./mutations";

function PinInput() {
  const { mutateAsync } = useVerifyPinMutation();

  const [pin, setPin] = useState(new Array(6).fill("")); 

  const handleClick = async (pinString: string) => {
    try {
      await mutateAsync(pinString);
      window.location.reload();
    } catch (error) {
      alert("Wrong Pin");
    }
  };

  const handleInput = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    if (value.length <= 6 && /^[0-9]*$/.test(value)) { 
      const newPin = value.split("");
      setPin([...newPin, ...new Array(6 - newPin.length).fill("")]); 

      
      if (value.length === 6) {
        handleClick(value);
      }
    }
  };

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
    <Card sx={{ maxWidth: 400, backgroundColor: '#e8f1fa', padding: 5 }}>
      <CardContent>
      <Typography variant="h6" mb={2}>
        Enter Pin
      </Typography>
      <Box
        display="flex"
        gap={2}
        mt={2}
        mb={4}
        justifyContent="center"
        position="relative"
        sx={{
          backgroundColor: "transparent",  
          border: "none",                  
          boxShadow: "none",               
        }}
      >

        {pin.map((digit, index) => (
          <Box
            key={index}
            sx={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: digit ? "#34466F" : "#ddd", 
              border: "1px solid #ccc",
            }}
          />
        ))}

        <input
          type="password"
          value={pin.join("")}
          onChange={handleInput}
          maxLength={6}
          style={{
            position: "absolute", 
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0,
          }}
        />
      </Box>
      
      </CardContent>
    </Card>
  </Box>
  );
}

export default React.memo(PinInput);
