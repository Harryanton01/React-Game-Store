import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Theme from "../../styles/Theme";
import GameItemList from "./GameItemList";
import games from "../../games";

const mockGamesList = games.slice(0, 2);

const GameItemListComponent = (
  <Theme>
    <GameItemList games={mockGamesList} />
  </Theme>
);

describe("GameItemList render tests", () => {
  test("should render correct number of games in the game list", async () => {
    render(GameItemListComponent);
    const gameCartList = await screen.findAllByTestId("game-item-list");
    expect(gameCartList).toHaveLength(2);
  });
});
