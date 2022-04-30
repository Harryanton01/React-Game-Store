import { ReactNode } from "react";

export type GameItemContentProps = {
  title: ReactNode;
  content: ReactNode;
  growFlex?: boolean;
  children?: ReactNode;
};

export type GrowFlexProps = Pick<GameItemContentProps, "growFlex">;
