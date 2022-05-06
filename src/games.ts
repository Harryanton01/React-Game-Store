import { GameType, GameCartType } from "./shared/types/game";
import playstation from "./assets/playstation.jpg";
import templerun from "./assets/templerun.jpg";
import pokemon from "./assets/pokemon.jpg";
import chickenrings from "./assets/chickenrings.jpg";
import ragequitters from "./assets/ragequitters.jpg";
import farmslam from "./assets/farmslam.jpg";

export const mockGame = {
  id: 0,
  amount_usd: 21.5,
  rating: 5,
  description: {
    release_date: new Date(2020, 3, 27),
    title: "Crush Saga iOS",
  },
  img_src: "test_src_url",
  tags: [
    { id: 1, tagName: "Game" },
    { id: 2, tagName: "Music" },
    { id: 3, tagName: "Action" },
  ],
};

const { description, amount_usd, id } = mockGame;

export const mockGameCart: GameCartType = {
  id,
  amount_usd,
  description,
  quantity: 3,
};

const games: GameType[] = [
  {
    id: 0,
    amount_usd: 21.5,
    rating: 5,
    description: {
      release_date: new Date(2020, 3, 27),
      title: "Crush Saga iOS",
    },
    img_src: templerun,
    tags: [
      { id: 1, tagName: "Game" },
      { id: 2, tagName: "Music" },
      { id: 3, tagName: "Action" },
    ],
  },
  {
    id: 1,
    amount_usd: 14.85,
    rating: 5,
    description: {
      release_date: new Date(2020, 5, 7),
      title: "Stranger Game Android",
    },
    img_src: pokemon,
    tags: [
      { id: 1, tagName: "Game" },
      { id: 2, tagName: "Music" },
    ],
  },
  {
    id: 2,
    amount_usd: 12.0,
    rating: 4,
    description: {
      release_date: new Date(2019, 9, 2),
      title: "Best Game",
    },
    img_src: farmslam,
    tags: [
      { id: 1, tagName: "Game" },
      { id: 2, tagName: "Action" },
    ],
  },
  {
    id: 3,
    amount_usd: 8.0,
    rating: 3,
    description: {
      release_date: new Date(2021, 3, 27),
      title: "Super Balls Mobile",
    },
    img_src: ragequitters,
    tags: [
      { id: 1, tagName: "Game" },
      { id: 2, tagName: "Music" },
      { id: 3, tagName: "Action" },
    ],
  },
  {
    id: 4,
    amount_usd: 4.6,
    rating: 3,
    description: {
      release_date: new Date(2019, 8, 14),
      title: "Dogs Play",
    },
    img_src: chickenrings,
    tags: [{ id: 1, tagName: "Game" }],
  },
  {
    id: 5,
    amount_usd: 2.05,
    rating: 2,
    description: {
      release_date: new Date(2019, 6, 16),
      title: "Puzzles Game",
    },
    img_src: playstation,
    tags: [{ id: 1, tagName: "Game" }],
  },
];

export default games;
