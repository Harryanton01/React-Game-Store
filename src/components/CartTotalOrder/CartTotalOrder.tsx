import { useContext, useState, useEffect } from "react";
import Text from "../../shared/components/Text/Text";
import { Row, StyledDivider, Column, CenterRow } from "./styles";
import { CartStoreContext } from "../../store/CartStoreContext/CartStoreContextProvider";
import CurrencyValue from "../CurrencyValue/CurrencyValue";
import { CurrencyContext } from "../../store/CurrencyContext/CurrencyContextProvider";
import { Link } from "react-router-dom";

const CartTotalOrder = () => {
  const { globalCartState } = useContext(CartStoreContext);
  const { globalCurrencyState } = useContext(CurrencyContext);
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    setTotalItems(
      globalCartState.gameItems.reduce((pre, cur) => pre + cur.quantity, 0)
    );
  }, [globalCartState]);
  return (
    <Column>
      <Row>
        <Text fontSize="large" fontBold>
          Order Value
        </Text>
        <Text fontSize="large" fontBold>
          {`${globalCurrencyState.currencyValue} `}
          <CurrencyValue
            data-testid="total-cart-amount"
            amount={globalCartState.totalAmountUsd}
          />
        </Text>
      </Row>
      <Row>
        <Text fontSize="large">Total Items</Text>
        <Text data-testid="total-cart-items" fontSize="large" fontBold>
          {totalItems}
        </Text>
      </Row>
      <Row>
        <StyledDivider variant="middle" />
      </Row>
      <CenterRow>
        <Link to="/list">
          <Text secondaryColor>Back to overview</Text>
        </Link>
      </CenterRow>
    </Column>
  );
};

export default CartTotalOrder;
