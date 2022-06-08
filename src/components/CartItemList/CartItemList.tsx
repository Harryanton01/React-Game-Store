import { Fragment, useContext } from "react";
import { CartStoreContext } from "../../store/CartStoreContext/CartStoreContextProvider";
import { RowItemWrapper } from "./styles";
import CartItem from "../CartItem/CartItem";
import { GameType } from "../../shared/types/game";

const CartItemList = () => {
  const { globalCartState } = useContext(CartStoreContext);
  return (
    <Fragment>
      <RowItemWrapper>
        {globalCartState.gameItems.map((gameItem) => {
          return (
            <CartItem
              data-testid="cart-item-list"
              key={gameItem.id}
              game={gameItem as GameType}
            />
          );
        })}
      </RowItemWrapper>
    </Fragment>
  );
};

export default CartItemList;
