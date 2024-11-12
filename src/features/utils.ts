import getSymbolFromCurrency from "currency-symbol-map";

type FormatBalanceOptions = {
  prefix?: "₱" | string;
  decimalPlaces?: number;
};

export enum CURRENCY {
  USD = "usd",
  PHP = "php",
}

export type CurrencyType = CURRENCY | `${CURRENCY}`;

export const formatBalance = (
  balance?: number,
  options?: FormatBalanceOptions
): string => {
  if (typeof balance !== "number") {
    return "";
  }
  const decimalPlaces = balance === 0 ? 0 : options?.decimalPlaces || 0;
  const formattedBalance =
    Math.round(balance * Math.pow(10, decimalPlaces)) /
    Math.pow(10, decimalPlaces);

  const validatedDecimalPlaces = Math.max(0, Math.min(4, decimalPlaces));
  const fractionDigits = formattedBalance >= 0 ? validatedDecimalPlaces : 2;

  const formattedValue = formattedBalance.toLocaleString("en-US", {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: 2,
  });

  return `${options?.prefix || ""}${formattedValue}`;
};

export const formatCurrencyAmount = (
  amount: number,
  currency: CurrencyType,
  decimalPlaces?: number
) => {
  return formatBalance(amount, {
    prefix: getSymbolFromCurrency(currency),
    decimalPlaces: decimalPlaces || 2,
  });
};
