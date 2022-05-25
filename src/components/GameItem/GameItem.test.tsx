import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import GameItem from "./GameItem";
import Theme from "../../styles/Theme";
import { mockGame } from "../../games";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartStoreContextProvider } from "../../store/CartStoreContext/CartStoreContext";

const GameItemComponent = (
  <Theme>
    <GameItem game={mockGame} long={true} />
  </Theme>
);

const GameItemComponentWithNav = (
  <Theme>
    <CartStoreContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={GameItemComponent} />
          <Route path="/cart" element={<div></div>} />
        </Routes>
      </BrowserRouter>
    </CartStoreContextProvider>
  </Theme>
);

describe("GameItem render tests", () => {
  test("should use correct img src", () => {
    render(GameItemComponent);
    const gameImage = screen.getByAltText("Game Image");
    expect(gameImage).toHaveAttribute("src", mockGame.img_src);
  });

  test("should display date in correct format", () => {
    render(GameItemComponent);
    const gameDateElement = screen.getByTestId("game-date");
    expect(gameDateElement).toHaveTextContent("Released - April 27, 2020");
  });

  test("should display correct rating", async () => {
    render(GameItemComponent);
    const gameStars = await screen.findAllByTestId("StarIcon");
    expect(gameStars).toHaveLength(5);
  });

  test("should display correct tags", async () => {
    render(GameItemComponent);
    const gameTags = await screen.findAllByTestId("game-tag");
    gameTags.forEach((tag, i) => {
      expect(tag).toHaveTextContent(mockGame.tags[i].tagName);
    });
    expect(gameTags).toHaveLength(3);
  });

  test("should display game quantity selector", () => {
    render(GameItemComponent);
    const incrementButton = screen.getByTestId("increment-quantity-button");
    const decrementButton = screen.getByTestId("decrement-quantity-button");
    const quantityValue = screen.getByTestId("quantity-value");
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
    expect(quantityValue).toBeInTheDocument();
    expect(quantityValue).toHaveTextContent("1");
  });

  test("should display game cost with initial currency of EUR", () => {
    render(GameItemComponent);
    const currencyElement = screen.getByTestId("game-currency-value");
    expect(currencyElement).toHaveTextContent(
      `${mockGame.amount_usd.toFixed(2)}€`
    );
  });

  test("should display add game button with plus icon", () => {
    render(GameItemComponent);
    const addGameButton = screen.getByRole("button", { name: "ADD TO BASKET" });
    const removeIcon = screen.queryByTestId("add-game-done-icon");
    const addIcon = screen.queryByTestId("add-game-plus-icon");
    expect(addGameButton).toBeInTheDocument();
    expect(addGameButton).not.toBeDisabled();
    expect(removeIcon).not.toBeInTheDocument();
    expect(addIcon).toBeInTheDocument();
  });
});

describe("GameItem interaction tests", () => {
  test("should increment quantity", () => {
    render(GameItemComponent);
    const incrementButton = screen.getByTestId("increment-quantity-button");
    fireEvent.click(incrementButton);
    const quantityValue = screen.getByTestId("quantity-value");
    expect(quantityValue).toHaveTextContent("2");
  });

  test("should decrement quantity", () => {
    render(GameItemComponent);
    const incrementButton = screen.getByTestId("increment-quantity-button");
    const decrementButton = screen.getByTestId("decrement-quantity-button");
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);
    //click to make sure it doesn't go below 1
    fireEvent.click(decrementButton);
    const quantityValue = screen.getByTestId("quantity-value");
    expect(quantityValue).toHaveTextContent("1");
  });

  test("should add game to cart", () => {
    render(GameItemComponentWithNav);
    const addGameButton = screen.getByRole("button", { name: "ADD TO BASKET" });
    const cartIcon = screen.getByTestId("badge-icon");
    fireEvent.click(addGameButton);
    expect(cartIcon).toHaveTextContent("1");
  });

  test("should change icon and disable add game button after adding to cart", () => {
    render(GameItemComponentWithNav);
    const addGameButton = screen.getByRole("button", { name: "ADD TO BASKET" });
    fireEvent.click(addGameButton);
    const removeIcon = screen.queryByTestId("add-game-done-icon");
    const addIcon = screen.queryByTestId("add-game-plus-icon");
    expect(addGameButton).toBeDisabled();
    expect(removeIcon).toBeInTheDocument();
    expect(addIcon).not.toBeInTheDocument();
  });
});
