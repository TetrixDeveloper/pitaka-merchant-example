import { ChangeEvent, useState } from "react";
import { Button, Grid2, Stack, TextField, Typography } from "@mui/material";

import { useGetCurrentUserWalletAccounts } from "features/auth/queries";
import { CURRENCY, formatCurrencyAmount } from "features/utils";
import { useExpressSendMutation } from "./mutations";

const amounts = ["100", "1000", "10000"];

function PayMerchant() {
  const { data: walletAccounts } = useGetCurrentUserWalletAccounts();
  const { mutateAsync, isPending } = useExpressSendMutation();

  const [amount, setAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [amountToPay, setAmountToPay] = useState(0);

  const handleAmountButton = (amountItem: string) => {
    setAmount(amountItem);
    setIsCustom(false);
    setAmountToPay(Number(amountItem));
  };

  const handleCustomButton = () => {
    setAmount("");
    setIsCustom(true);
    setAmountToPay(0);
  };

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmountToPay(Number(event.target.value));
  };

  const handleExpressSend = async () => {
    if (
      walletAccounts &&
      walletAccounts.length > 0 &&
      process.env.REACT_APP_DTAKA_TEMP_WALLET_ACCOUNT
    ) {
      const payload = {
        senderAccountNumber: walletAccounts[0].accountNumber,
        recipientAccountNumber: process.env.REACT_APP_DTAKA_TEMP_WALLET_ACCOUNT,
        amount: amountToPay,
      };

      try {
        await mutateAsync(payload);

        alert("Success!");

        setAmount("");
        setIsCustom(false);
        setAmountToPay(0);
      } catch (error) {
        alert("Error processing your transaction");
      }
    } else {
      alert("Error: Wallets are undefined");
    }
  };

  return (
    <Stack spacing={2}>
      <Stack flexDirection="row" mt="1em">
        <Typography variant="h5">Merchant: </Typography>
        <Typography variant="h5" color="#6b7280" pl={1}>
          DTaka
        </Typography>
      </Stack>
      <Stack flexDirection="row" mt="1em">
        <Typography variant="h5">Amount: </Typography>
        <Grid2>
          {amounts.map((item, i) => (
            <Button
              variant={amount === item ? "contained" : "outlined"}
              color="success"
              key={`amount-${i}`}
              sx={{ margin: 0.5 }}
              onClick={() => handleAmountButton(item)}
            >
              {formatCurrencyAmount(Number(item), CURRENCY.PHP)}
            </Button>
          ))}
          <Button
            variant={isCustom ? "contained" : "outlined"}
            color="success"
            key={`amount-custom`}
            sx={{ margin: 0.5 }}
            onClick={handleCustomButton}
          >
            Custom
          </Button>
        </Grid2>
      </Stack>
      {isCustom && (
        <TextField
          hiddenLabel
          type="number"
          id="custom-amount"
          onChange={handleAmountChange}
          variant="filled"
          size="small"
        />
      )}
      <Button
        variant="contained"
        onClick={handleExpressSend}
        size="large"
        sx={{ marginTop: 2 }}
        disabled={!amountToPay || isPending}
      >
        Next
      </Button>
    </Stack>
  );
}

export default PayMerchant;
