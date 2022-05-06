export type CurrencySelectors = "EUR" | "USD" | "GBP";

export type CurrencyStateType = {
  currencyValue: CurrencySelectors;
  currencyMultiplier: number;
  error: boolean;
};

export type CurrencyContextType = {
  globalCurrencyState: CurrencyStateType;
  fetchLatestCurrency: (currency: CurrencySelectors) => void;
};
