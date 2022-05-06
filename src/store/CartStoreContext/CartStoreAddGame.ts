import { CartStoreStateType } from "./types";
import { gameInCart } from "./CartStoreContext";
import { GameCartType } from "../../shared/types/game";

const addGame = (
  game: GameCartType,
  state: CartStoreStateType
): CartStoreStateType => {
  const { quantity = 1, amount_usd } = game;
  const fixedAmount = +amount_usd.toFixed(2);
  const newTotal = +(state.totalAmountUsd + fixedAmount * quantity).toFixed(2);
  let newItems;

  if (gameInCart(game.id, state)) {
    newItems = state.gameItems.map((gameItem) => {
      return gameItem.id === game.id
        ? { ...gameItem, quantity: gameItem.quantity + quantity }
        : gameItem;
    });
  } else {
    newItems = state.gameItems.concat(game);
  }

  return {
    ...state,
    gameItems: newItems,
    totalAmountUsd: newTotal,
  } as CartStoreStateType;
};

export default addGame;
