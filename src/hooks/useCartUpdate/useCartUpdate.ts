import { useContext } from "react";
import {
  CartStoreContext,
  getGameQuantity,
  addGameToCart,
  removeGameFromCart,
} from "../../store/CartStoreContext/CartStoreContext";
import { GameCartType } from "../../shared/types/game";

const useCartUpdate = (game: GameCartType) => {
  const { globalCartState, dispatch } = useContext(CartStoreContext);

  const gameQuantity = getGameQuantity(game.id, globalCartState);

  const updateGameAdd = (game?: GameCartType) => {
    if (game) {
      const updatedGame: GameCartType = { ...game, quantity: 1 };
      dispatch(addGameToCart(updatedGame));
    }
  };

  const updateGameRemove = (game?: GameCartType) => {
    if (game) {
      const updatedGame: GameCartType = { ...game, quantity: 1 };
      dispatch(removeGameFromCart(updatedGame));
    }
  };

  return { globalCartState, gameQuantity, updateGameAdd, updateGameRemove };
};

export default useCartUpdate;
