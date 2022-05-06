import { CartStoreStateType } from "./types";
import { gameInCart, findGameIndex } from "./CartStoreContext";
import { GameCartType } from "../../shared/types/game";

const removeGame = (
  game: GameCartType,
  state: CartStoreStateType
): CartStoreStateType => {
  const { quantity = 1, amount_usd } = game;
  const fixedAmount = +amount_usd.toFixed(2);
  let newTotal = +(state.totalAmountUsd - fixedAmount * quantity).toFixed(2);
  const isLastQuantity =
    state.gameItems[findGameIndex(game.id, state)].quantity === 1;
  let newItems;

  if (gameInCart(game.id, state)) {
    if (isLastQuantity) {
      newItems = state.gameItems.filter((gameItem) => gameItem.id !== game.id);
    } else {
      newItems = state.gameItems.map((gameItem) => {
        return gameItem.id === game.id
          ? { ...gameItem, quantity: gameItem.quantity - quantity }
          : gameItem;
      });
    }
  } else {
    newItems = [...state.gameItems];
    newTotal = state.totalAmountUsd;
  }

  return {
    ...state,
    gameItems: newItems,
    totalAmountUsd: newTotal,
  } as CartStoreStateType;
};

export default removeGame;
