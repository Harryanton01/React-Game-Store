import React, { FC, ReactNode, useState } from "react";
import { CartStoreStateType, CartStoreContextType } from "./types";
import { GameCartType } from "../../shared/types/game";

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
  const [globalCartState, setGlobalCartState] =
    useState<CartStoreStateType>(initialCartState);
  const gameInCart = (id: number) => {
    return findGameIndex(id) === -1 ? false : true;
  };
  const findGameIndex = (id: number) => {
    return globalCartState.gameItems.findIndex(
      (gameItem) => gameItem.id === id
    );
  };
  const getGameQuantity = (id: number) => {
    return gameInCart(id)
      ? globalCartState.gameItems[findGameIndex(id)].quantity
      : 0;
  };
  const addGame = (game: GameCartType) => {
    const { quantity, amount_usd } = game;
    const fixedAmount = +amount_usd.toFixed(2);
    const newTotal = +(
      globalCartState.totalAmountUsd +
      fixedAmount * quantity
    ).toFixed(2);
    let newItems;

    if (gameInCart(game.id)) {
      newItems = globalCartState.gameItems.map((gameItem) => {
        return gameItem.id === game.id
          ? { ...gameItem, quantity: gameItem.quantity + quantity }
          : gameItem;
      });
    } else {
      newItems = globalCartState.gameItems.concat(game);
    }
    setGlobalCartState({ gameItems: newItems, totalAmountUsd: newTotal });
  };
  const removeGame = (game: GameCartType) => {
    const { quantity, amount_usd } = game;
    const fixedAmount = +amount_usd.toFixed(2);
    let newTotal = +(
      globalCartState.totalAmountUsd -
      fixedAmount * quantity
    ).toFixed(2);
    const isLastQuantity =
      globalCartState.gameItems[findGameIndex(game.id)].quantity - quantity <=
      0;
    let newItems;

    if (gameInCart(game.id)) {
      if (isLastQuantity) {
        newItems = globalCartState.gameItems.filter(
          (gameItem) => gameItem.id !== game.id
        );
      } else {
        newItems = globalCartState.gameItems.map((gameItem) => {
          return gameItem.id === game.id
            ? { ...gameItem, quantity: gameItem.quantity - quantity }
            : gameItem;
        });
      }
    } else {
      newItems = [...globalCartState.gameItems];
      newTotal = globalCartState.totalAmountUsd;
    }

    setGlobalCartState({ gameItems: newItems, totalAmountUsd: newTotal });
  };
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
