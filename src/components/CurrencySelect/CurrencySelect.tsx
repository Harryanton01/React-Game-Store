import { useContext } from "react";
import { StyledSelect } from "./styles";
import MenuItem from "@mui/material/MenuItem";
import { SelectProps } from "@mui/material";
import { currencies } from "../../currencies";
import { CurrencyContext } from "../../store/CurrencyContext/CurrencyContext";
import { CurrencySelectors } from "../../store/CurrencyContext/types";
import { SelectChangeEvent } from "@mui/material";

const CurrencySelect: React.FC<SelectProps> = () => {
  const { globalCurrencyState, fetchLatestCurrency } =
    useContext(CurrencyContext);
  const onCurrencyChange = (event: SelectChangeEvent<unknown>) => {
    const newCurrencyValue = event.target.value as CurrencySelectors;
    fetchLatestCurrency(newCurrencyValue);
  };
  return (
    <StyledSelect
      data-testid="currency-selector"
      value={globalCurrencyState.currencyValue}
      label="Currency"
      onChange={(event) => onCurrencyChange(event)}
    >
      {currencies.map((currencyItem) => {
        return (
          <MenuItem value={currencyItem.value} key={currencyItem.value}>
            {`${currencyItem.label} ${currencyItem.symbol}`}
          </MenuItem>
        );
      })}
    </StyledSelect>
  );
};
export default CurrencySelect;
