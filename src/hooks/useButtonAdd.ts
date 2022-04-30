import { useState, useContext, useEffect } from "react";
import {
  CartStoreContext,
  gameInCart,
} from "../store/CartStoreContext/CartStore";
import { GameCartType } from "../shared/types/game";

const useButtonAdd = (game: GameCartType) => {
  const { globalCartState, dispatch } = useContext(CartStoreContext);
  const [disabled, setDisabled] = useState(
    gameInCart(game.id, globalCartState)
  );
  useEffect(() => {
    setDisabled(gameInCart(game.id, globalCartState));
  }, [globalCartState, game.id]);

  return { dispatch, disabled };
};

export default useButtonAdd;
