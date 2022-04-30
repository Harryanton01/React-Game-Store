import React, { FC, ReactNode } from "react";
import { CurrencyContextType, CurrencyStateType } from "./types";
import useFetchCurrency from "../../hooks/useFetchCurrency";

export const initialCurrencyState: CurrencyStateType = {
  currency: "EUR",
  currencyMultiplier: 1,
};

export const initialCurrencyContextState: CurrencyContextType = {
  globalCurrencyState: initialCurrencyState,
  updateCurrency: () => undefined,
};
export const CurrencyContext = React.createContext<CurrencyContextType>({
  globalCurrencyState: initialCurrencyState,
  updateCurrency: () => undefined,
});

export const CurrencyContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { updateCurrency, currencyMultiplier, currency } = useFetchCurrency();
  return (
    <CurrencyContext.Provider
      value={{
        globalCurrencyState: { currency, currencyMultiplier },
        updateCurrency,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
