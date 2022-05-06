import { Fragment, useContext } from "react";
import CartItem from "../CartItem/CartItem";
import { CartStoreContext } from "../../store/CartStoreContext/CartStoreContext";
import Text from "../../shared/components/Text/Text";
import { Row, RowItem, RowItemWrapper } from "./styles";
import CurrencyValue from "../CurrencyValue/CurrencyValue";

const CartItemList = () => {
  const { globalCartState } = useContext(CartStoreContext);
  return (
    <Fragment>
      {globalCartState.gameItems.map((gameItem) => {
        return (
          <RowItemWrapper data-testid={"cart-item-list"} key={gameItem.id}>
            <RowItem>
              <CartItem game={gameItem} />
            </RowItem>
          </RowItemWrapper>
        );
      })}
      <Row>
        {globalCartState.totalAmountUsd > 0 ? (
          <Text fontSize={"large"} fontBold>
            Total:{" "}
            <CurrencyValue
              data-testid={"total-cart-amount"}
              amount={globalCartState.totalAmountUsd}
            />
          </Text>
        ) : (
          <Text fontSize={"large"} fontBold>
            Your cart is empty...
          </Text>
        )}
      </Row>
    </Fragment>
  );
};

export default CartItemList;
