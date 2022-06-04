export type CurrencySelectors = "EUR" | "USD" | "GBP";
export type CurrencySymbol = "€" | "£" | "$";

export type CurrencyStateType = {
  currencyValue: CurrencySelectors;
  currencyMultiplier: number;
  currencySymbol: CurrencySymbol;
  symbolBeforeValue: boolean;
  error: boolean;
};

export type CurrencyContextType = {
  globalCurrencyState: CurrencyStateType;
  fetchLatestCurrency: (currency: CurrencySelectors) => void;
};
