export type GameType = {
  id: number;
  amount_usd: number;
  rating: number;
  description: {
    release_date: string;
    title: string;
  };
  img_src: string;

  tags: Array<{ id: number; tagName: string }>;
};

export type GameCartType = GameType & {
  quantity: number;
};
