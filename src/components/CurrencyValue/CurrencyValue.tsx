import { useContext, Fragment } from "react";
import { CurrencyContext } from "../../store/CurrencyContext/CurrencyContext";
import { currencies } from "../../currencies";

const CurrencyValue = ({ amount }: { amount: number }) => {
  const { globalCurrencyState } = useContext(CurrencyContext);
  const sanitisedAmount = (
    amount * globalCurrencyState.currencyMultiplier
  ).toFixed(2);
  const isGBP = globalCurrencyState.currency === "GBP";
  const symbol = currencies.find((cur) => {
    if (cur.value === globalCurrencyState.currency) return true;
    return false;
  });
  return (
    <Fragment>
      {symbol && isGBP && symbol.symbol}
      {sanitisedAmount}
      {symbol && !isGBP && symbol.symbol}
    </Fragment>
  );
};

export default CurrencyValue;
