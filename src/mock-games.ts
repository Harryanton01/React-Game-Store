import { GameCartType } from "./shared/types/game";

export const mockGame = {
  id: 0,
  amount_usd: 21.5,
  rating: 5,
  description: {
    release_date: "2020-04-26T23:00:00.000Z",
    title: "Crush Saga iOS",
  },
  img_src: "test_src_url",
  tags: [
    { id: 1, tagName: "Game" },
    { id: 2, tagName: "Music" },
    { id: 3, tagName: "Action" },
  ],
};

export const mockGameCart: GameCartType = {
  ...mockGame,
  quantity: 2,
};
