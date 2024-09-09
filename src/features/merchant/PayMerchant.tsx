import { ChangeEvent, useState } from "react";
import { Button, Grid2, Stack, TextField, Typography } from "@mui/material";

import { useGetCurrentUserWalletAccounts } from "features/auth/queries";
import { CURRENCY, formatCurrencyAmount } from "features/utils";
import { useExpressSendMutation } from "./mutations";

const amounts = ["100", "1000", "10000", "50000", "100000"];
const TRANSACTION_FEE_PERCENT = Number(
  process.env.REACT_APP_TRANSACTION_FEE_PERCENT
);
const TRANSACTION_FEE_MIN = Number(process.env.REACT_APP_TRANSACTION_FEE_MIN);

function PayMerchant() {
  const { data: walletAccounts } = useGetCurrentUserWalletAccounts();
  const { mutateAsync, isPending } = useExpressSendMutation();

  const [amount, setAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [amountToPay, setAmountToPay] = useState(0);
  const [transactionFee, setTransactionFee] = useState(TRANSACTION_FEE_MIN);

  const calculateFee = (amount: number) => {
    const calculatedFee = amount * TRANSACTION_FEE_PERCENT;
    return Math.max(calculatedFee, TRANSACTION_FEE_MIN);
  };

  const handleAmountButton = (amountItem: string) => {
    const numericAmount = Number(amountItem);
    const fee = calculateFee(numericAmount);
    setAmount(amountItem);
    setIsCustom(false);
    setTransactionFee(fee);
    setAmountToPay(numericAmount + fee);
  };

  const handleCustomButton = () => {
    setAmount("");
    setIsCustom(true);
    setTransactionFee(TRANSACTION_FEE_MIN);
    setAmountToPay(TRANSACTION_FEE_MIN);
  };

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputAmount = Number(event.target.value);
    const fee = calculateFee(inputAmount);
    setTransactionFee(fee);
    setAmountToPay(inputAmount + fee);
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
      <Stack flexDirection="row" mt="1em">
        <Typography variant="h5">
          Fee: {formatCurrencyAmount(transactionFee, CURRENCY.PHP)}
        </Typography>
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
