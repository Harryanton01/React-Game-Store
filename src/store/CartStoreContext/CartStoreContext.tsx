import React, { FC, ReactNode, useReducer } from "react";
import {
  CartStoreStateType,
  CartStoreContextType,
  CartStoreAction,
} from "./types";
import { GameCartType } from "../../shared/types/game";
import cartStoreReducer from "./CartStoreReducer";

export const initialCartState: CartStoreStateType = {
  gameItems: [],
  totalAmountUsd: 0,
};

export const addGameToCart = (game: GameCartType): CartStoreAction => ({
  type: "add",
  payload: game,
});

export const removeGameFromCart = (game: GameCartType): CartStoreAction => ({
  type: "remove",
  payload: game,
});

export const findGameIndex = (id: number, state: CartStoreStateType) => {
  return state.gameItems.findIndex((gameItem) => gameItem.id === id);
};

export const gameInCart = (id: number, state: CartStoreStateType) => {
  return findGameIndex(id, state) === -1 ? false : true;
};

export const getGameQuantity = (id: number, state: CartStoreStateType) => {
  return gameInCart(id, state)
    ? state.gameItems[findGameIndex(id, state)].quantity
    : 0;
};

export const CartStoreContext = React.createContext<CartStoreContextType>({
  globalCartState: initialCartState,
  dispatch: () => undefined,
});

export const CartStoreContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [globalCartState, dispatch] = useReducer(
    cartStoreReducer,
    initialCartState
  );
  return (
    <CartStoreContext.Provider value={{ globalCartState, dispatch }}>
      {children}
    </CartStoreContext.Provider>
  );
};
