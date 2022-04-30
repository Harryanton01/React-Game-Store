export type CurrencySelectors = "EUR" | "USD" | "GBP";

export type CurrencyStateType = {
  currency: CurrencySelectors;
  currencyMultiplier: number;
};

export type CurrencyContextType = {
  globalCurrencyState: CurrencyStateType;
  updateCurrency: (currency: CurrencySelectors) => void;
};
