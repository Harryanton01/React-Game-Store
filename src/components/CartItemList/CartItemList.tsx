import { Fragment, useContext } from "react";
import { CartStoreContext } from "../../store/CartStoreContext/CartStoreContext";
import { RowItemWrapper } from "./styles";
import GameItem from "../GameItem/GameItem";
import { GameType } from "../../shared/types/game";

const CartItemList = () => {
  const { globalCartState } = useContext(CartStoreContext);
  return (
    <Fragment>
      <RowItemWrapper>
        {globalCartState.gameItems.map((gameItem) => {
          return (
            <GameItem
              data-testid="cart-item-list"
              key={gameItem.id}
              game={gameItem as GameType}
              showAdditionalContent={false}
            />
          );
        })}
      </RowItemWrapper>
    </Fragment>
  );
};

export default CartItemList;
