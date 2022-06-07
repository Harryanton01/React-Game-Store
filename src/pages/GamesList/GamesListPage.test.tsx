import "@testing-library/jest-dom";
import {
  render,
  screen,
  waitFor,
  fireEvent,
  within,
} from "@testing-library/react";
import Theme from "../../styles/Theme";
import GamesListPage from "./GamesListPage";
import { BrowserRouter, Router } from "react-router-dom";
import { CurrencyContextProvider } from "../../store/CurrencyContext/CurrencyContext";
import { CartStoreContextProvider } from "../../store/CartStoreContext/CartStoreContext";
import { createMemoryHistory } from "history";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedAxiosFn = () => {
  mockedAxios.get.mockImplementation((url) => {
    switch (url) {
      case "http://localhost:8000/api/games":
        return Promise.resolve({
          data: [
            {
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
            },
          ],
          status: 200,
        });
      case "http://api.exchangeratesapi.io/v1/latest":
        return Promise.resolve({
          data: {
            rates: { GBP: 0.8 },
          },
          status: 200,
        });
      default:
        return Promise.reject(new Error("url not found"));
    }
  });
};

const GamePage = (
  <CurrencyContextProvider>
    <CartStoreContextProvider>
      <Theme>
        <BrowserRouter>
          <GamesListPage />
        </BrowserRouter>
      </Theme>
    </CartStoreContextProvider>
  </CurrencyContextProvider>
);

describe("GamePage Tests", () => {
  test("should fetch and display the correct number of games in the list", async () => {
    mockedAxiosFn();
    render(GamePage);
    await waitFor(() => {
      const gameCartList = screen.getAllByTestId("game-item-list");
      expect(gameCartList).toHaveLength(1);
    });
  });

  test("should display correct initial base currency EUR", async () => {
    mockedAxiosFn();
    render(GamePage);
    await waitFor(() => {
      const currencyValue = screen.getByTestId("game-currency-value");
      expect(currencyValue).toHaveTextContent("21.50€");
    });
  });

  test("should change game currency value when selecting a new currency", async () => {
    mockedAxiosFn();
    render(GamePage);
    const selectCurrencyElement = screen.getAllByRole("button");
    fireEvent.mouseDown(selectCurrencyElement[1]);
    const listbox = within(screen.getByRole("listbox"));
    fireEvent.click(listbox.getByText(/GBP/i));
    await waitFor(() => {
      const currencyValue = screen.getByTestId("game-currency-value");
      expect(currencyValue).toHaveTextContent("£17.20");
    });
  });

  test("should increment game quantity", async () => {
    mockedAxiosFn();
    render(GamePage);
    const incrementButton = await screen.findByTestId(
      "increment-quantity-button"
    );
    const quantityValue = await screen.findByTestId("quantity-value");
    fireEvent.click(incrementButton);
    expect(quantityValue).toHaveTextContent("2");
  });

  test("should decrement game quantity but not below 1", async () => {
    mockedAxiosFn();
    render(GamePage);
    const incrementButton = await screen.findByTestId(
      "increment-quantity-button"
    );
    const decrementButton = await screen.findByTestId(
      "decrement-quantity-button"
    );
    const quantityValue = await screen.findByTestId("quantity-value");
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    expect(quantityValue).toHaveTextContent("1");
  });

  test("should add game to cart and disable add to basket button", async () => {
    mockedAxiosFn();
    render(GamePage);
    const addGameButton = await screen.findByRole("button", {
      name: "ADD TO BASKET",
    });
    const cartBadge = screen.getByTestId("badge-icon");
    fireEvent.click(addGameButton);
    expect(cartBadge).toHaveTextContent("1");
    expect(addGameButton).toBeDisabled();
  });

  test("should display the number of games added in the cart badge regardless of quantity", async () => {
    mockedAxiosFn();
    render(GamePage);
    const addGameButton = await screen.findByRole("button", {
      name: "ADD TO BASKET",
    });
    const cartBadge = screen.getByTestId("badge-icon");
    const incrementButton = await screen.findByTestId(
      "increment-quantity-button"
    );
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(addGameButton);
    expect(cartBadge).toHaveTextContent("1");
  });

  test("should remove game from cart and re-enable add to basket button when decrementing quantity below 1", async () => {
    mockedAxiosFn();
    render(GamePage);
    const addGameButton = await screen.findByRole("button", {
      name: "ADD TO BASKET",
    });
    const decrementButton = await screen.findByTestId(
      "decrement-quantity-button"
    );
    const cartBadge = screen.getByTestId("badge-icon");
    fireEvent.click(addGameButton);
    fireEvent.click(decrementButton);
    expect(addGameButton).not.toBeDisabled();
    expect(cartBadge).toHaveTextContent("0");
  });

  test("should route to cart page when clicking the checkout button", () => {
    const history = createMemoryHistory();
    history.push = jest.fn();
    render(
      <CurrencyContextProvider>
        <CartStoreContextProvider>
          <Theme>
            <Router location={history.location} navigator={history}>
              <GamesListPage />
            </Router>
          </Theme>
        </CartStoreContextProvider>
      </CurrencyContextProvider>
    );
    const checkoutButton = screen.getByRole("button", { name: /CHECKOUT/i });
    fireEvent.click(checkoutButton);
    expect(history.push).toHaveBeenCalledWith(
      { hash: "", pathname: "/cart", search: "" },
      undefined
    );
  });
});