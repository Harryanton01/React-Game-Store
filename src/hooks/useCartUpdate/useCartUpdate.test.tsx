import React, { FC, ReactNode, useReducer } from "react";
import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react";
import useCartUpdate from "./useCartUpdate";
import cartStoreReducer from "../../store/CartStoreContext/CartStoreReducer";
import { CartStoreStateType } from "../../store/CartStoreContext/types";
import { CartStoreContext } from "../../store/CartStoreContext/CartStoreContext";
import { mockGameCart } from "../../games";

const mockCartState: CartStoreStateType = {
  gameItems: [mockGameCart],
  totalAmountUsd: 64.5,
};

const MockCartStoreContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [globalCartState, dispatch] = useReducer(
    cartStoreReducer,
    mockCartState
  );
  return (
    <CartStoreContext.Provider value={{ globalCartState, dispatch }}>
      {children}
    </CartStoreContext.Provider>
  );
};

describe("Cart Update Hook tests", () => {
  test("should increment game quantity by 1 and update total cart amount", () => {
    const { result } = renderHook(() => useCartUpdate(mockGameCart), {
      wrapper: MockCartStoreContextProvider,
    });
    act(() => {
      result.current.updateGameAdd(mockGameCart);
    });
    expect(result.current.globalCartState.gameItems[0].quantity).toBe(4);
    expect(result.current.globalCartState.totalAmountUsd).toBe(86);
  });

  test("should decrement game quantity by 1 and update total cart amount", () => {
    const { result } = renderHook(() => useCartUpdate(mockGameCart), {
      wrapper: MockCartStoreContextProvider,
    });
    act(() => {
      result.current.updateGameRemove(mockGameCart);
    });
    expect(result.current.globalCartState.gameItems[0].quantity).toBe(2);
    expect(result.current.globalCartState.totalAmountUsd).toBe(43);
  });

  test("should remove game from cart if quantity goes below 1 and update total cart amount to 0", async () => {
    const { result } = renderHook(() => useCartUpdate(mockGameCart), {
      wrapper: MockCartStoreContextProvider,
    });
    act(() => {
      for (let i = 0; i < 3; i++) {
        result.current.updateGameRemove(mockGameCart);
      }
    });
    expect(result.current.globalCartState.gameItems).toHaveLength(0);
    expect(result.current.globalCartState.totalAmountUsd).toBe(0);
  });
});
