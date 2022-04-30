import { CartStoreStateType, CartStoreAction } from "./types";
import { gameInCart, findGameIndex } from "./CartStore";

const cartStoreReducer = (
  state: CartStoreStateType,
  action: CartStoreAction
): CartStoreStateType => {
  const { quantity, amount_usd, id: gameId } = action.payload;
  const fixedAmount = +amount_usd.toFixed(2);
  let newTotal;
  switch (action.type) {
    case "add":
      newTotal = +(state.totalAmountUsd + fixedAmount * quantity).toFixed(2);
      if (gameInCart(gameId, state)) {
        const itemIndex = findGameIndex(gameId, state);
        const updatedGame = {
          ...action.payload,
          quantity: state.items[itemIndex].quantity + quantity,
        };
        let updatedItems = [...state.items];
        updatedItems[itemIndex] = updatedGame;
        console.log({
          ...state,
          items: updatedItems,
          totalAmountUsd: newTotal,
        });
        return {
          ...state,
          items: updatedItems,
          totalAmountUsd: newTotal,
        };
      }
      console.log({
        ...state,
        items: [...state.items].concat(action.payload),
        totalAmountUsd: newTotal,
      });

      return {
        ...state,
        items: [...state.items].concat(action.payload),
        totalAmountUsd: newTotal,
      };
    case "remove":
      newTotal = +(state.totalAmountUsd - fixedAmount).toFixed(2);
      if (gameInCart(gameId, state)) {
        const gameItemIndex = findGameIndex(gameId, state);
        if (state.items[gameItemIndex].quantity === 1) {
          const updatedItems = state.items.filter(
            (gameItem) => gameItem.id !== action.payload.id
          );
          return {
            ...state,
            items: updatedItems,
            totalAmountUsd: newTotal,
          };
        }
        const updatedGame = {
          ...action.payload,
          quantity: state.items[gameItemIndex].quantity - quantity,
        };
        let updatedItems = [...state.items];
        updatedItems[gameItemIndex] = updatedGame;
        return {
          ...state,
          items: updatedItems,
          totalAmountUsd: newTotal,
        };
      }
      return {
        ...state,
      };
    default:
      return {
        ...state,
        items: [...state.items],
        totalAmountUsd: state.totalAmountUsd,
      };
  }
};

export default cartStoreReducer;
