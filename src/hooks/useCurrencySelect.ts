import { useState, useContext } from "react";
import { CurrencyContext } from "../store/CurrencyContext/CurrencyContext";

const useCurrencySelect = () => {
  const { updateCurrency, globalCurrencyState } = useContext(CurrencyContext);
  const [value, setValue] = useState(globalCurrencyState.currency);
  return { value, setValue, updateCurrency };
};

export default useCurrencySelect;
