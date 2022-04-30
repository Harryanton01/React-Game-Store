import { ReactNode } from "react";
import { GameCartType } from "../../shared/types/game";

export type CartStoreStateType = {
  items: GameCartType[];
  totalAmountUsd: number;
};

export type CartStoreAction = {
  type: "add" | "remove";
  payload: GameCartType;
};

export type CartStoreContextType = {
  globalCartState: CartStoreStateType;
  dispatch: React.Dispatch<CartStoreAction>;
  children?: ReactNode;
};
