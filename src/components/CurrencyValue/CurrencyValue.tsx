import { useContext } from "react";
import { CurrencyContext } from "../../store/CurrencyContext/CurrencyContext";

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
  return (
    <span data-testid={dataTestId}>
      {globalCurrencyState.symbolBeforeValue &&
        globalCurrencyState.currencySymbol}
      {sanitisedAmount}
      {!globalCurrencyState.symbolBeforeValue &&
        globalCurrencyState.currencySymbol}
    </span>
  );
};

export default CurrencyValue;
