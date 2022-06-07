import "@testing-library/jest-dom";
import {
  render,
  screen,
  waitFor,
  fireEvent,
  within,
} from "@testing-library/react";
import Theme from "../../styles/Theme";
import CheckoutPage from "./CheckoutPage";
import { BrowserRouter, Router } from "react-router-dom";
import { CurrencyContextProvider } from "../../store/CurrencyContext/CurrencyContext";
import { CartStoreContext } from "../../store/CartStoreContext/CartStoreContext";
import useHandleCart from "../../store/CartStoreContext/useHandleCart";
import { createMemoryHistory } from "history";
import axios from "axios";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockGame = {
  id: 0,
  amount_usd: 21.5,
  rating: 5,
  description: {
    release_date: "2020-04-26T23:00:00.000Z",
    title: "Crush Saga iOS",
  },
  img_src: "https://i.imgur.com/1G9s8gS.jpg",
  tags: [
    { id: 1, tagName: "Game" },
    { id: 2, tagName: "Music" },
    { id: 3, tagName: "Action" },
  ],
};
const mockedAxiosFn = () => {
  mockedAxios.get.mockResolvedValueOnce({
    data: {
      rates: { GBP: 0.8 },
    },
    status: 200,
  });
};

const MockCheckoutPage = () => {
  const { globalCartState, addGame, removeGame, gameInCart, getGameQuantity } =
    useHandleCart({
      gameItems: [{ quantity: 2, ...mockGame }],
      totalAmountUsd: 43,
    });
  return (
    <CurrencyContextProvider>
      <CartStoreContext.Provider
        value={{
          globalCartState,
          addGame,
          removeGame,
          gameInCart,
          getGameQuantity,
        }}
      >
        <Theme>
          <BrowserRouter>
            <CheckoutPage />
          </BrowserRouter>
        </Theme>
      </CartStoreContext.Provider>
    </CurrencyContextProvider>
  );
};

describe("CheckoutPage Tests", () => {
  test("should display correct total order value and items regardless of quantity", async () => {
    render(<MockCheckoutPage />);
    const orderValue = screen.getByTestId("total-cart-amount");
    const totalItems = screen.getByTestId("total-cart-items");
    const quantityValue = screen.getByTestId("quantity-value");
    expect(orderValue).toHaveTextContent("43.00€");
    expect(totalItems).toHaveTextContent("1");
    expect(quantityValue).toHaveTextContent("2");
  });

  test("should update total order currency when selecting a new currency", async () => {
    mockedAxiosFn();
    render(<MockCheckoutPage />);
    const selectCurrencyElement = screen.getAllByRole("button");
    fireEvent.mouseDown(selectCurrencyElement[1]);
    const listbox = within(screen.getByRole("listbox"));
    fireEvent.click(listbox.getByText(/GBP/i));
    await waitFor(() => {
      const orderValue = screen.getByTestId("total-cart-amount");
      expect(orderValue).toHaveTextContent("£34.40");
    });
  });

  test("should increment quantity and update order value", async () => {
    render(<MockCheckoutPage />);
    const incrementButton = screen.getByTestId("increment-quantity-button");
    const quantityValue = screen.getByTestId("quantity-value");
    const orderValue = screen.getByTestId("total-cart-amount");
    const totalItems = screen.getByTestId("total-cart-items");
    fireEvent.click(incrementButton);
    expect(orderValue).toHaveTextContent("64.50€");
    expect(totalItems).toHaveTextContent("1");
    expect(quantityValue).toHaveTextContent("3");
  });

  test("should decrement quantity and update order value", async () => {
    render(<MockCheckoutPage />);
    const decrementButton = screen.getByTestId("decrement-quantity-button");
    const quantityValue = screen.getByTestId("quantity-value");
    const orderValue = screen.getByTestId("total-cart-amount");
    const totalItems = screen.getByTestId("total-cart-items");
    fireEvent.click(decrementButton);
    expect(orderValue).toHaveTextContent("21.50€");
    expect(totalItems).toHaveTextContent("1");
    expect(quantityValue).toHaveTextContent("1");
  });

  test("should remove game from cart when decrementing below 1", async () => {
    render(<MockCheckoutPage />);
    const decrementButton = screen.getByTestId("decrement-quantity-button");
    const quantityValue = screen.getByTestId("quantity-value");
    const orderValue = screen.getByTestId("total-cart-amount");
    const totalItems = screen.getByTestId("total-cart-items");
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    expect(orderValue).toHaveTextContent("0.00€");
    expect(totalItems).toHaveTextContent("0");
    expect(quantityValue).not.toBeInTheDocument();
  });

  test("should remove game from cart when clicking on the remove button", async () => {
    render(<MockCheckoutPage />);
    const quantityValue = screen.getByTestId("quantity-value");
    const orderValue = screen.getByTestId("total-cart-amount");
    const totalItems = screen.getByTestId("total-cart-items");
    const removeGameButton = screen.getByRole("button", {
      name: "REMOVE",
    });
    fireEvent.click(removeGameButton);
    expect(orderValue).toHaveTextContent("0.00€");
    expect(totalItems).toHaveTextContent("0");
    expect(quantityValue).not.toBeInTheDocument();
  });

  test("should navigate back to game list page", () => {
    const history = createMemoryHistory();
    history.push = jest.fn();
    render(
      <Theme>
        <Router location={history.location} navigator={history}>
          <CheckoutPage />
        </Router>
      </Theme>
    );
    const backToListPageLink = screen.getByRole("link", {
      name: /Go back to overview page/i,
    });
    fireEvent.click(backToListPageLink);
    expect(history.push).toHaveBeenCalledWith(
      { hash: "", pathname: "/list", search: "" },
      undefined
    );
  });
});
