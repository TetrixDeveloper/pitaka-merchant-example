import React from 'react';
import { useEffect, useState } from 'react';
import {
  Button,
  Typography,
  Box,
  Paper,
  Checkbox,
  FormControlLabel,
  AppBar,
  IconButton,
  Container,
  styled,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useGetCurrentUserWalletAccounts } from 'features/auth/queries';
import { CURRENCY, formatCurrencyAmount } from 'features/utils';
import { useClearPaymentIntentMutation } from './mutations';
import { useQuery } from '@tanstack/react-query';
import {
  getFetchPaymentIntentQuery,
  useGetWalletAccountBalanceQuery,
} from './queries';
import './CardMedia.css';
import { useSnackbar } from 'notistack';

function PayMerchant() {
  const [agreed, setAgreed] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const { data: walletAccounts } = useGetCurrentUserWalletAccounts();
  const { mutateAsync, isPending } = useClearPaymentIntentMutation();

  const { data: activeAccountBalance } = useGetWalletAccountBalanceQuery(
    walletAccounts?.[0]?.accountNumber
  );

  const paymentIntentId = window.location.pathname.split('/')?.[1];
  const { data: paymentIntent } = useQuery(
    getFetchPaymentIntentQuery(paymentIntentId)
  );

  const [amountToPay, setAmountToPay] = useState(0);
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (paymentIntent) {
      setAmountToPay(paymentIntent?.requestedAmount || 0);
      setDescription(paymentIntent?.description || '');
    }
  }, [paymentIntent]);

  const handlePayment = async () => {
    if (paymentIntent && walletAccounts?.[0]?.accountNumber) {
      try {
        await mutateAsync({
          amount: paymentIntent.requestedAmount,
          senderAccountNumber: walletAccounts[0].accountNumber,
          paymentIntentId: paymentIntent.id,
        });

        enqueueSnackbar('Successfully paid');

        window.location.href = paymentIntent.returnUrl;
      } catch (error) {
        enqueueSnackbar(`Error processing your transaction: ${error}`, {
          variant: 'error',
        });
      }
    }
  };

  const AmountText = styled(Typography)({
    fontWeight: 500,
    textAlign: 'right',
  });

  const PaymentRow = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  });

  if (!paymentIntent) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="sm" sx={{ height: '150vh', bgcolor: '#f5f5f5', p: 0 }}>
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <AppBar position="static" sx={{ bgcolor: '#1a2b4b', pb: 40 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
            <IconButton edge="start" color="inherit" sx={{ mt: 0 }}>
              <ArrowBack />
            </IconButton>
            <Typography variant="h6" sx={{ mt: 2, mb: 2, ml: 2 }}>
              Pitaka Login
            </Typography>
          </Box>
        </AppBar>

        <Paper sx={{ p: 3, m: 2, mt: -40, borderRadius: 2 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h5" sx={{ mb: 1 }}>
              Pitaka
            </Typography>
            <Typography variant="h4">{description}</Typography>
          </Box>

          <PaymentRow>
            <Typography>Pay with</Typography>
            <Typography>Pitaka</Typography>
          </PaymentRow>

          <PaymentRow>
            <Typography>Available Balance</Typography>
            <AmountText>
              {formatCurrencyAmount(Number(activeAccountBalance), CURRENCY.PHP)}
            </AmountText>
          </PaymentRow>

          <Typography variant="h6" sx={{ my: 3, textAlign: 'left' }}>
            You are about to pay
          </Typography>

          <PaymentRow>
            <Typography>Amount</Typography>
            <AmountText>
              {formatCurrencyAmount(amountToPay, CURRENCY.PHP)}
            </AmountText>
          </PaymentRow>

          <PaymentRow>
            <Typography>Discount</Typography>
            <Typography color="text.secondary">No available voucher</Typography>
          </PaymentRow>

          <PaymentRow sx={{ borderTop: '1px solid #eee', pt: 2, mb: 4 }}>
            <Typography variant="h6">Total</Typography>
            <Typography variant="h6">
              {formatCurrencyAmount(amountToPay, CURRENCY.PHP)}
            </Typography>
          </PaymentRow>
        </Paper>

        <Paper sx={{ p: 3, m: 2, mt: 1, mb: 17, borderRadius: 2 }}>
          <Typography sx={{ mb: 2, textAlign: 'left' }}>
            Confirmed transaction will be processed immediately and cannot be
            reversed.
          </Typography>

          <FormControlLabel
            sx={{ textAlign: 'left' }}
            control={
              <Checkbox
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
            }
            label="I've reviewed the Pitaka details and agree to proceed using my crypto wallet."
          />
        </Paper>

        <Button
          variant="contained"
          fullWidth
          size="large"
          onClick={handlePayment}
          disabled={!walletAccounts || isPending || !agreed}
          sx={{
            bgcolor: '#5B7BA3',
            py: 2,
            borderRadius: 2,
            '&:hover': {
              bgcolor: '#4A6A92',
            },
          }}
        >
          Pay {formatCurrencyAmount(amountToPay, CURRENCY.PHP)}
        </Button>
      </Box>
    </Container>
  );
}

export default PayMerchant;
