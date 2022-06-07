import { FC, ReactNode, createContext } from "react";
import { CurrencyContextType, CurrencyStateType } from "./types";
import useFetchCurrency from "./useFetchCurrency";

export const initialCurrencyState: CurrencyStateType = {
  currencyValue: "EUR",
  currencyMultiplier: 1,
  currencySymbol: "€",
  symbolBeforeValue: false,
  error: false,
};

export const CurrencyContext = createContext<CurrencyContextType>({
  globalCurrencyState: initialCurrencyState,
  fetchLatestCurrency: () => undefined,
});

export const CurrencyContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const {
    fetchLatestCurrency,
    currencyMultiplier,
    currencyValue,
    error,
    currencySymbol,
    symbolBeforeValue,
  } = useFetchCurrency();
  return (
    <CurrencyContext.Provider
      value={{
        globalCurrencyState: {
          currencyValue,
          currencyMultiplier,
          currencySymbol,
          symbolBeforeValue,
          error,
        },
        fetchLatestCurrency,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
