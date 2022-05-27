import { ReactNode } from "react";
import { GameCartType } from "../../shared/types/game";

export type CartStoreStateType = {
  gameItems: GameCartType[];
  totalAmountUsd: number;
};

export type CartStoreAction = {
  type: "add" | "remove";
  payload: GameCartType;
};

export type CartStoreContextType = {
  globalCartState: CartStoreStateType;
  addGame: (game: GameCartType) => void;
  removeGame: (game: GameCartType) => void;
  gameInCart: (id: number) => boolean;
  getGameQuantity: (id: number) => number;
  children?: ReactNode;
};
