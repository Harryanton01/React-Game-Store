import { CartStoreStateType, CartStoreAction } from "./types";
import addGame from "./CartStoreAddGame";
import removeGame from "./CartStoreRemoveGame";

const cartStoreReducer = (
  state: CartStoreStateType,
  action: CartStoreAction
): CartStoreStateType => {
  switch (action.type) {
    case "add":
      return addGame(action.payload, state);
    case "remove":
      return removeGame(action.payload, state);
    default:
      return {
        ...state,
        gameItems: [...state.gameItems],
        totalAmountUsd: state.totalAmountUsd,
      };
  }
};

export default cartStoreReducer;
