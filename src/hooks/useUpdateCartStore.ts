import { useState } from "react";
import { GameCartType } from "../shared/types/game";
import { CartStoreStateType } from "../store/CartStoreContext/types";
import { initialCartState } from "../store/CartStoreContext/CartStoreContext";

const useUpdateCartStore = () => {
  const [cartStore, setCartStore] =
    useState<CartStoreStateType>(initialCartState);
};

export default useUpdateCartStore;
