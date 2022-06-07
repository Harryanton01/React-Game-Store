import {
  StyledBadge,
  StyledShoppingCartIcon,
  StyledCheckoutButton,
} from "./styles";
import Text from "../../shared/components/Text/Text";
import { useContext, useEffect, useState } from "react";
import { CartStoreContext } from "../../store/CartStoreContext/CartStoreContext";
import { Link } from "react-router-dom";

const CheckoutBadge = () => {
  const { globalCartState } = useContext(CartStoreContext);
  const [badgeInvisible, setbadgeInvisible] = useState(true);
  useEffect(() => {
    globalCartState.gameItems.length > 0
      ? setbadgeInvisible(false)
      : setbadgeInvisible(true);
  }, [globalCartState]);
  return (
    <StyledBadge
      data-testid="badge-icon"
      badgeContent={globalCartState.gameItems.length}
      invisible={badgeInvisible}
      color="primary"
    >
      <StyledShoppingCartIcon />
    </StyledBadge>
  );
};

const CheckoutButton = () => {
  return (
    <Link to="/cart">
      <StyledCheckoutButton variant="text" startIcon={<CheckoutBadge />}>
        <Text secondaryColor fontBold>
          CHECKOUT
        </Text>
      </StyledCheckoutButton>
    </Link>
  );
};

export default CheckoutButton;
