import { FC, ReactNode, useReducer } from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CartItemList from "./CartItemList";
import Theme from "../../styles/Theme";
import games from "../../games";
import { CartStoreContext } from "../../store/CartStoreContext/CartStoreContext";
import cartStoreReducer from "../../store/CartStoreContext/CartStoreReducer";
import "@testing-library/jest-dom";

const mockGameCartList = games.slice(0, 2).map((gameItem) => {
  return { ...gameItem, quantity: 3 };
});

const MockCartStoreContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [globalCartState, dispatch] = useReducer(cartStoreReducer, {
    gameItems: [...mockGameCartList],
    totalAmountUsd: 109.05,
  });
  return (
    <CartStoreContext.Provider value={{ globalCartState, dispatch }}>
      {children}
    </CartStoreContext.Provider>
  );
};

const CartItemListComponent = (
  <Theme>
    <MockCartStoreContextProvider>
      <CartItemList />
    </MockCartStoreContextProvider>
  </Theme>
);

describe("CartItemList render tests", () => {
  test("should render correct number of games in the cart", async () => {
    render(CartItemListComponent);
    const gameCartList = await screen.findAllByTestId("cart-item-list");
    expect(gameCartList).toHaveLength(2);
  });
  test("should render correct total cart amount", () => {
    render(CartItemListComponent);
    const totalAmount = screen.getByTestId("total-cart-amount");
    expect(totalAmount).toHaveTextContent("109.05€");
  });
});

describe("CartItemList interaction tests", () => {
  test("should update total cart amount on increment", () => {
    render(CartItemListComponent);
    const incrementButton = screen.getAllByTestId("increment-quantity-button");
    fireEvent.click(incrementButton[0]);
    const totalAmount = screen.getByTestId("total-cart-amount");
    expect(totalAmount).toHaveTextContent("130.55€");
  });

  test("should update total cart amount on decrement", () => {
    render(CartItemListComponent);
    const decrementButton = screen.getAllByTestId("decrement-quantity-button");
    fireEvent.click(decrementButton[0]);
    const totalAmount = screen.getByTestId("total-cart-amount");
    expect(totalAmount).toHaveTextContent("87.55€");
  });

  test("should unmount cart item component after decrementing below 1", async () => {
    render(CartItemListComponent);
    const decrementButton = screen.getAllByTestId("decrement-quantity-button");
    for (let i = 0; i < 3; i++) {
      fireEvent.click(decrementButton[0]);
    }
    const gameCartList = await screen.findAllByTestId("cart-item-list");
    expect(gameCartList).toHaveLength(1);
  });

  test("should display empty cart store message when removing all items", async () => {
    render(CartItemListComponent);
    const decrementButton = screen.getAllByTestId("decrement-quantity-button");

    decrementButton.forEach((decrementQuantity) => {
      for (let i = 0; i < 3; i++) {
        fireEvent.click(decrementQuantity);
      }
    });
    const gameCartList = screen.queryAllByTestId("cart-item-list");
    const emptyCartText = screen.getByText("Your cart is empty...");
    expect(gameCartList).toHaveLength(0);
    expect(emptyCartText).toBeInTheDocument();
  });
});
