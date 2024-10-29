import { useQuery } from '@tanstack/react-query';
import {
  fetchPaymentIntent,
  fetchWalletAccounts,
  fetchWalletAccountBalance,
} from './services';

export const paymentIntentKeys = {
  all: ['paymentIntents'] as const,
  paymentIntent: () => [...paymentIntentKeys.all, 'paymentIntent'] as const,
};

export const accountKeys = {
  all: ['accounts'] as const,
  account: (accountNumber: string) =>
    [...accountKeys.all, 'account', accountNumber] as const,
  activeAccount: (accountNumber: string) =>
    [...accountKeys.account(accountNumber), 'activeAccount'] as const,
  accountList: () => [...accountKeys.all, 'accountList'] as const,
  accountsAccumulatedTotalBalance: () =>
    [...accountKeys.all, 'accumulatedTotalBalance'] as const,
  accountWalletBalance: (accountNumber: string) => [
    ...accountKeys.account(accountNumber),
    'walletBalance',
  ],
  accountLimits: (accountNumber: string) => [
    ...accountKeys.account(accountNumber),
    'accountLimits',
  ],
};

export const getFetchPaymentIntentQuery = (paymentIntentId: string) => ({
  queryKey: paymentIntentKeys.paymentIntent(),
  queryFn: () => fetchPaymentIntent(paymentIntentId),
});

export const useGetWalletAccountsQuery = () => {
  return useQuery({
    queryKey: accountKeys.accountList(),
    queryFn: fetchWalletAccounts,
  });
};

export const useGetWalletAccountBalanceQuery = (accountNumber = '') => {
  const { data: accounts } = useGetWalletAccountsQuery();
  const fetchBalance = async () => {
    if (!accountNumber && accounts) {
      accountNumber = accounts?.length ? accounts[0].accountNumber : '';
    }
    return await fetchWalletAccountBalance(accountNumber);
  };

  return useQuery({
    queryKey: accountKeys.accountWalletBalance(accountNumber),
    queryFn: fetchBalance,
    enabled: Boolean(accountNumber),
  });
};
