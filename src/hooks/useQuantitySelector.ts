import { useState, useContext, useEffect } from "react";
import { GameCartType } from "../shared/types/game";
import { CartStoreContext } from "../store/CartStoreContext/CartStoreContext";

const useQuantitySelector = (game: GameCartType) => {
  const { addGame, removeGame, gameInCart, globalCartState, getGameQuantity } =
    useContext(CartStoreContext);
  const [gameQuantity, setQuantity] = useState(1);
  const incrementQuantity = () => {
    if (gameInCart(game.id)) {
      const updatedGame = { ...game, quantity: game.quantity + 1 };
      addGame(updatedGame);
    }
    setQuantity(gameQuantity + 1);
  };

  const decrementQuantity = () => {
    if (gameInCart(game.id)) {
      const updatedGame = { ...game, quantity: 1 };
      removeGame(updatedGame);
    }
    if (gameQuantity === 1) return;
    setQuantity(gameQuantity - 1);
  };

  useEffect(() => {
    getGameQuantity(game.id) > 0
      ? setQuantity(getGameQuantity(game.id))
      : setQuantity(1);
  }, [globalCartState]);
  return { gameQuantity, incrementQuantity, decrementQuantity };
};

export default useQuantitySelector;
