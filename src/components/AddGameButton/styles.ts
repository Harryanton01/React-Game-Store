import styled from "styled-components";
import Button from "../../shared/components/Button/Button";
import DoneIcon from "@mui/icons-material/Done";

export const StyledButton = styled(Button)`
  &&& {
    background-color: ${(props) =>
      props.disabled
        ? props.theme.colors.lighterBlue
        : props.theme.colors.blue};
    width: 9.375rem;
    padding: 6px 12px;
  }
`;

export const StyledDoneIcon = styled(DoneIcon)`
  color: ${(props) => props.theme.colors.white};
  margin-right: 4px;
  .MuiButton-startIcon {
    margin-right: 4px;
  }
`;
