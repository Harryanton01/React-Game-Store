import { FC, ReactNode, useReducer } from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CartItem from "./CartItem";
import Theme from "../../styles/Theme";
import { mockGameCart } from "../../games";
import { CartStoreContext } from "../../store/CartStoreContext/CartStoreContext";
import cartStoreReducer from "../../store/CartStoreContext/CartStoreReducer";
import "@testing-library/jest-dom";

const MockCartStoreContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [globalCartState, dispatch] = useReducer(cartStoreReducer, {
    gameItems: [mockGameCart],
    totalAmountUsd: 0,
  });
  return (
    <CartStoreContext.Provider value={{ globalCartState, dispatch }}>
      {children}
    </CartStoreContext.Provider>
  );
};

const CartItemComponent = (
  <Theme>
    <MockCartStoreContextProvider>
      <CartItem game={mockGameCart} />
    </MockCartStoreContextProvider>
  </Theme>
);

describe("CartItem render tests", () => {
  test("should render title", () => {
    render(CartItemComponent);
    const gameTitle = screen.getByText("Crush Saga iOS");
    expect(gameTitle).toBeInTheDocument();
  });

  test("should render default currency value", () => {
    render(CartItemComponent);
    const gameCurrency = screen.getByTestId("cart-game-currency");
    expect(gameCurrency).toHaveTextContent("21.50€");
  });

  test("should display cart game quantity selector with correct quantity", () => {
    render(CartItemComponent);
    const incrementButton = screen.getByTestId("increment-quantity-button");
    const decrementButton = screen.getByTestId("decrement-quantity-button");
    const quantityValue = screen.getByTestId("quantity-value");
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
    expect(quantityValue).toHaveTextContent("3");
  });
});

describe("CartItem interaction tests", () => {
  test("should increment quantity", () => {
    render(CartItemComponent);
    const incrementButton = screen.getByTestId("increment-quantity-button");
    fireEvent.click(incrementButton);
    const quantityValue = screen.getByTestId("quantity-value");
    expect(quantityValue).toHaveTextContent("4");
  });

  test("should decrement quantity", () => {
    render(CartItemComponent);
    const decrementButton = screen.getByTestId("decrement-quantity-button");
    fireEvent.click(decrementButton);
    const quantityValue = screen.getByTestId("quantity-value");
    expect(quantityValue).toHaveTextContent("2");
  });
});
