import { FC, ReactNode } from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Theme from "../../styles/Theme";
import CurrencyError from "./CurrencyError";
import { CurrencyContext } from "../../store/CurrencyContext/CurrencyContext";
import useFetchCurrency from "../../hooks/useFetchCurrency/useFetchCurrency";

const MockCurrencyContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { currencyMultiplier, currencyValue, fetchLatestCurrency, error } =
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

const CurrencyErrorComponent = (
  <Theme>
    <MockCurrencyContextProvider>
      <CurrencyError />
    </MockCurrencyContextProvider>
  </Theme>
);

describe("Currency Error Test", () => {
  test("should not render currency error component when error is false", () => {
    render(CurrencyErrorComponent);
    const errorMessage = screen.queryByText(
      "There was an error fetching the currency..."
    );
    expect(errorMessage).not.toBeInTheDocument();
  });
});
