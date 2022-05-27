import { useContext } from "react";
import Text from "../../shared/components/Text/Text";
import { Row, StyledDivider, Column, CenterRow } from "./styles";
import { CartStoreContext } from "../../store/CartStoreContext/CartStoreContext";
import CurrencyValue from "../CurrencyValue/CurrencyValue";
import { CurrencyContext } from "../../store/CurrencyContext/CurrencyContext";
import { Link } from "react-router-dom";

const CartTotalOrder = () => {
  const { globalCartState } = useContext(CartStoreContext);
  const { globalCurrencyState } = useContext(CurrencyContext);
  return (
    <Column>
      <Row>
        <Text fontSize="large" fontBold>
          Order Value
        </Text>
        <Text fontSize="large" fontBold>
          {`${globalCurrencyState.currencyValue} `}
          <CurrencyValue
            data-testid={"total-cart-amount"}
            amount={globalCartState.totalAmountUsd}
          />
        </Text>
      </Row>
      <Row>
        <Text fontSize="large">Total Items</Text>
        <Text fontSize="large" fontBold>
          {globalCartState.gameItems.length}
        </Text>
      </Row>
      <Row>
        <StyledDivider variant="middle" />
      </Row>
      <CenterRow>
        <Link to="/">
          <Text secondaryColor>Back to overview</Text>
        </Link>
      </CenterRow>
    </Column>
  );
};

export default CartTotalOrder;
