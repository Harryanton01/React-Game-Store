import styled from "styled-components";
import Select from "@mui/material/Select";

export const StyledSelect = styled(Select)`
  .MuiSelect-select {
    background-color: ${(props) => props.theme.colors.lightBlue};
    color: ${(props) => props.theme.colors.white};
    line-height: 6px;
  }
  && > .MuiSelect-select {
    min-height: 0;
  }
  .MuiSvgIcon-root {
    color: white;
  }
`;
