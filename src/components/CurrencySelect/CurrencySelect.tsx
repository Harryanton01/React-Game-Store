import { StyledSelect } from "./styles";
import MenuItem from "@mui/material/MenuItem";
import { SelectProps } from "@mui/material";
import { currencies } from "../../currencies";
import useCurrencySelect from "../../hooks/useCurrencySelect";
import { CurrencySelectors } from "../../store/CurrencyContext/types";
import { SelectChangeEvent } from "@mui/material";

const CurrencySelect: React.FC<SelectProps> = () => {
  const { value, setValue, updateCurrency } = useCurrencySelect();
  const onCurrencyChange = (event: SelectChangeEvent<unknown>) => {
    const value = event.target.value as CurrencySelectors;
    setValue(value);
    updateCurrency(value);
    console.log("change");
  };
  return (
    <StyledSelect
      value={value}
      label={"Currency"}
      onChange={(e) => onCurrencyChange(e)}
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
