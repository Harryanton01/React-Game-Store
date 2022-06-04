import React, { FC, ReactNode } from "react";
import { CartStoreStateType, CartStoreContextType } from "./types";
import { GameCartType } from "../../shared/types/game";
import useHandleCart from "./useHandleCart";

export const initialCartState: CartStoreStateType = {
  gameItems: [],
  totalAmountUsd: 0,
};

export const CartStoreContext = React.createContext<CartStoreContextType>({
  globalCartState: initialCartState,
  addGame: (game: GameCartType) => undefined,
  removeGame: (game: GameCartType) => undefined,
  gameInCart: (id: number) => false,
  getGameQuantity: (id: number) => 0,
});

export const CartStoreContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { globalCartState, addGame, removeGame, gameInCart, getGameQuantity } =
    useHandleCart();
  return (
    <CartStoreContext.Provider
      value={{
        globalCartState,
        addGame,
        removeGame,
        gameInCart,
        getGameQuantity,
      }}
    >
      {children}
    </CartStoreContext.Provider>
  );
};
