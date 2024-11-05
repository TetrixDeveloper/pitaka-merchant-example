import {  useEffect, useState } from "react";
import { Button, Typography, Box, Card, CardContent, Checkbox, FormControlLabel, Avatar, CardMedia } from "@mui/material";
import MerchantIcon from 'assets/Confirmation.svg'
import { useGetCurrentUserWalletAccounts } from "features/auth/queries";
import { CURRENCY, formatCurrencyAmount } from "features/utils";
import { useClearPaymentIntentMutation } from "./mutations";
import { useQuery } from "@tanstack/react-query";
import { getFetchPaymentIntentQuery } from "./queries";
import './CardMedia.css'


function PayMerchant() {


  const [description, setDescription] = useState<string | null>(null);
  const [paymentIntentId, setPaymentIntentId] = useState("");
  const [returnUrl, setReturnUrl] = useState("");
  const [amountToPay, setAmountToPay] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  
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
        setAmountToPay(Number(amountParam));
      }
    }
    
    
  }, []);



  const { data: walletAccounts } = useGetCurrentUserWalletAccounts();
  const { mutateAsync, isPending } = useClearPaymentIntentMutation();

  const { data: paymentIntent } = useQuery(
    getFetchPaymentIntentQuery(paymentIntentId)
  );






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

    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'none',
      }}
    >
      <Card sx={{ width: 350, borderRadius: 2, boxShadow: 3, backgroundColor: '#e8f1fa' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>

            <Typography variant="subtitle1" sx={{ ml: 2 }}>
              Review and Transfer
            </Typography>
            
            
          </Box>

          <Box       sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}>
          <CardMedia
              component="img"
              alt="MerchantSuccessIcon"
              style={{ width: '50px', 
                height: '50px', 
                objectFit: 'contain',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',  
              }}
              src={MerchantIcon} 
              
            />
          </Box>

          <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 1 }}>
          {formatCurrencyAmount(amountToPay, CURRENCY.PHP)}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'center', mb: 3 }}>
            You are about to pay
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar sx={{ bgcolor: '#4caf50' }}>M</Avatar>
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                {description}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              p: 2,
              border: '1px solid #e0e0e0',
              borderRadius: 2,
              mb: 2,
              backgroundColor: '#f9f9f9',
            }}
          >
            <Typography variant="body2">
              <strong>Total Amount</strong>: {formatCurrencyAmount(amountToPay, CURRENCY.PHP)}
            </Typography>
            <Typography variant="body2">
              <strong>Discount</strong>: No available voucher
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <strong>Transaction Type</strong>: <span style={{ marginLeft: 8 }}>Merchant Payment</span>
            </Typography>
          </Box>

          

          <Typography variant="body2" sx={{ color: 'gray', mb: 2 }}>
            Confirmed transaction will be processed immediately and cannot be reversed.
          </Typography>

          <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={isChecked}
                  onChange={(event) => setIsChecked(event.target.checked)}
                />
              }
              label="I've reviewed the DApp details and agree to proceed using my crypto wallet."
              sx={{ mb: 2 }}
            />

          <Button
            variant="contained"
            color="primary"
            onClick={handlePayment}
            disabled={!walletAccounts || isPending || !isChecked}
            fullWidth
            sx={{ borderRadius: 2 }}
          >
            Pay {formatCurrencyAmount(amountToPay, CURRENCY.PHP)}
          </Button>
        </CardContent>
      </Card>
    </Box>

  );
}

export default PayMerchant;
