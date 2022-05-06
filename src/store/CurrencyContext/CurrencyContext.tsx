import { FC, ReactNode, createContext } from "react";
import { CurrencyContextType, CurrencyStateType } from "./types";
import useFetchCurrency from "../../hooks/useFetchCurrency/useFetchCurrency";

export const initialCurrencyState: CurrencyStateType = {
  currencyValue: "EUR",
  currencyMultiplier: 1,
  error: false,
};

export const CurrencyContext = createContext<CurrencyContextType>({
  globalCurrencyState: initialCurrencyState,
  fetchLatestCurrency: () => undefined,
});

export const CurrencyContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { fetchLatestCurrency, currencyMultiplier, currencyValue, error } =
    useFetchCurrency();
  return (
    <CurrencyContext.Provider
      value={{
        globalCurrencyState: { currencyValue, currencyMultiplier, error },
        fetchLatestCurrency,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
