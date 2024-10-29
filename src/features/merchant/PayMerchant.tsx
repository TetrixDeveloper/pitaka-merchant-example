import {  useEffect, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";

import { useGetCurrentUserWalletAccounts } from "features/auth/queries";
import { CURRENCY, formatCurrencyAmount } from "features/utils";
import { useClearPaymentIntentMutation } from "./mutations";
import { useQuery } from "@tanstack/react-query";
import { getFetchPaymentIntentQuery } from "./queries";

const TRANSACTION_FEE_PERCENT = Number(
  process.env.REACT_APP_TRANSACTION_FEE_PERCENT
);
const TRANSACTION_FEE_MIN = Number(process.env.REACT_APP_TRANSACTION_FEE_MIN);

function PayMerchant() {


  const [description, setDescription] = useState<string | null>(null);
  const [paymentIntentId, setPaymentIntentId] = useState("");
  const [returnUrl, setReturnUrl] = useState("");
  const [amountToPay, setAmountToPay] = useState(0);
  const [transactionFee, setTransactionFee] = useState(TRANSACTION_FEE_MIN);
  
  useEffect(() => {

    const savedUrl = localStorage.getItem('transactionUrl');

    if (savedUrl) 
    {
    
      const url = new URL(savedUrl);
      const searchParams = new URLSearchParams(url.search);
      const idParam = searchParams.get('id');
      const returnUrlParam = searchParams.get('returnUrl');
      const amountParam = searchParams.get('amount');
      const descriptionParam = searchParams.get('description');
      if (amountParam) 
      {
        setPaymentIntentId(idParam ?? '');
        setReturnUrl(returnUrlParam ?? '');
        setDescription(descriptionParam);
        const fee = calculateFee(Number(amountParam));
        setTransactionFee(fee);
        setAmountToPay(Number(amountParam));
      }
    }
    
    
  }, []);



  const { data: walletAccounts } = useGetCurrentUserWalletAccounts();
  const { mutateAsync, isPending } = useClearPaymentIntentMutation();

  const { data: paymentIntent } = useQuery(
    getFetchPaymentIntentQuery(paymentIntentId)
  );


  const calculateFee = (amount: number) => {
    const calculatedFee = amount * TRANSACTION_FEE_PERCENT;
    return Math.max(calculatedFee, TRANSACTION_FEE_MIN);
  };




  const handlePayment = async () => {
    if (paymentIntent && walletAccounts?.[0]?.accountNumber) {

      try {
        console.log('payment id', paymentIntent.id);
        await mutateAsync({
          amount: amountToPay,
          senderAccountNumber: walletAccounts[0].accountNumber,
          paymentIntentId: paymentIntent.id,
        });
        alert("Success!");
        setAmountToPay(0);
        window.location.href=returnUrl;
      } catch (error) {
        alert("Error processing your transaction");
      }
    }
  };

  
  console.log('walletsAccount', walletAccounts);
  console.log(process.env.REACT_APP_DTAKA_TEMP_WALLET_ACCOUNT);

  return (
    <Stack spacing={2}>
      <Stack flexDirection="row" mt="1em">
        <Typography variant="h5">Merchant: </Typography>
        <Typography variant="h5" color="#6b7280" pl={1}>
          DWallet Technologies Inc.
        </Typography>
      </Stack>
      <Stack flexDirection="row" mt="1em">
      <Typography variant="h5">Order:{description} </Typography>
      </Stack>
      
       


      <Stack flexDirection="row" mt="1em">
        <Typography variant="h5">
          Fee: {transactionFee}
        </Typography>
      </Stack>

      <Stack flexDirection="row" mt="1em">
    <Typography variant="h5">Total Amount:{formatCurrencyAmount(amountToPay, CURRENCY.PHP)} </Typography>
      </Stack>
      
      
      <Button
        variant="contained"
        onClick={handlePayment}
        size="large"
        sx={{ marginTop: 2 }}
        disabled={!walletAccounts || isPending}
      >
        Next
      </Button>
    </Stack>
  );
}

export default PayMerchant;
