import { useContext } from "react";
import { CurrencyContext } from "../../store/CurrencyContext/CurrencyContext";
import { currencies } from "../../currencies";

const CurrencyValue = ({
  amount,
  "data-testid": dataTestId,
}: {
  amount: number;
  "data-testid"?: string;
}) => {
  const { globalCurrencyState } = useContext(CurrencyContext);
  const sanitisedAmount = (
    amount * globalCurrencyState.currencyMultiplier
  ).toFixed(2);
  const isGBP = globalCurrencyState.currencyValue === "GBP";
  const symbol = currencies.find((cur) => {
    return cur.value === globalCurrencyState.currencyValue;
  });
  return (
    <span data-testid={dataTestId}>
      {symbol && isGBP && symbol.symbol}
      {sanitisedAmount}
      {symbol && !isGBP && symbol.symbol}
    </span>
  );
};

export default CurrencyValue;
