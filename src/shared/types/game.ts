export type GameType = {
  id: number;
  amount_usd: number;
  rating: number;
  description: {
    release_date: Date;
    title: string;
  };
  img_src: string;
  quantity?: number;
  tags: Array<{ id: number; tagName: string }>;
};

export type GameCartType = Required<
  Pick<GameType, "id" | "amount_usd" | "description" | "quantity">
>;
