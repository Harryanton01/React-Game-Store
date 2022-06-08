import { useState, useContext, useEffect } from "react";
import { GameCartType } from "../../shared/types/game";
import { CartStoreContext } from "../../store/CartStoreContext/CartStoreContextProvider";

const useQuantitySelector = (game: GameCartType) => {
  const { addGame, removeGame, gameInCart, getGameQuantity } =
    useContext(CartStoreContext);

  const [gameQuantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    if (gameInCart(game.id)) addGame(game);
    setQuantity(gameQuantity + 1);
  };

  const decrementQuantity = () => {
    if (gameInCart(game.id)) removeGame(game);
    if (gameQuantity === 1) return;
    setQuantity(gameQuantity - 1);
  };

  useEffect(() => {
    getGameQuantity(game.id) > 0
      ? setQuantity(getGameQuantity(game.id))
      : setQuantity(gameQuantity);
  }, [gameQuantity, game.id, getGameQuantity]);

  return { gameQuantity, incrementQuantity, decrementQuantity };
};

export default useQuantitySelector;
