import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Button from "../../shared/components/Button/Button";

export const StyledBadge = styled(Badge)`
  & > .MuiBadge-badge {
    color: ${(props) => props.theme.colors.darkerBlue};
    background-color: ${(props) => props.theme.colors.green};
  }
`;

export const StyledShoppingCartIcon = styled(ShoppingCartIcon)`
  color: ${(props) => props.theme.colors.white};
`;

export const StyledCheckoutButton = styled(Button)`
  && {
    color: ${(props) => props.theme.colors.green};
    font-size: 0.75em;
  }
  & > .MuiButton-startIcon {
    margin-right: 14px;
  }
`;
