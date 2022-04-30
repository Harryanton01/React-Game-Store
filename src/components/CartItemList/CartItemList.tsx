import { Fragment, useContext } from "react";
import CartItem from "../CartItem/CartItem";
import { CartStoreContext } from "../../store/CartStoreContext/CartStore";
import Text from "../../shared/components/Text/Text";
import { Row, RowItem, RowItemWrapper } from "./styles";
import CurrencyValue from "../CurrencyValue/CurrencyValue";

const CartItemList = () => {
  const { globalCartState } = useContext(CartStoreContext);
  console.log(globalCartState.totalAmountUsd);
  return (
    <Fragment>
      {globalCartState.items.map((gameItem) => {
        return (
          <RowItemWrapper key={gameItem.id}>
            <RowItem>
              <CartItem game={gameItem} />
            </RowItem>
          </RowItemWrapper>
        );
      })}
      <Row>
        {globalCartState.totalAmountUsd > 0 ? (
          <Text fontSize={"large"} fontBold>
            Total: <CurrencyValue amount={globalCartState.totalAmountUsd} />
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
