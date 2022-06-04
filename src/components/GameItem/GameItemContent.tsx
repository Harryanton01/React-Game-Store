import { FC } from "react";
import Text from "../../shared/components/Text/Text";
import { StyledColumn, StyledRating, StyledChip } from "./styles";
import { GameItemContentProps } from "./types";
import { QuantitySelector } from "../QuantitySelector/QuantitySelector";
import { GameCartType } from "../../shared/types/game";
import FlexRow from "../../shared/components/Layout/FlexRow";

const GameItemContent: FC<GameItemContentProps> = ({
  title,
  content,
  children,
  growFlex,
}) => {
  return (
    <StyledColumn growFlex={growFlex}>
      <Text fontSize="small" secondaryColor>
        {title}
      </Text>
      {content}
      {children}
    </StyledColumn>
  );
};

export const GameTitle = ({
  description,
}: {
  description: { release_date: string; title: string };
}) => {
  return (
    <GameItemContent
      title={
        <span data-testid={"game-date"}>
          {`Released - ${new Date(description.release_date).toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          )}`}
        </span>
      }
      content={<Text fontBold>{description.title}</Text>}
      growFlex
    />
  );
};

export const GameRating = ({ rating }: { rating: number }) => {
  return (
    <GameItemContent
      title={"Rating"}
      content={<StyledRating data-testid={"rating"} value={rating} readOnly />}
      growFlex
    />
  );
};

export const GameTags = ({
  tags,
}: {
  tags: { id: number; tagName: string }[];
}) => {
  return (
    <GameItemContent
      title={"Tags"}
      content={
        <FlexRow>
          {tags.map((tag) => {
            return (
              <StyledChip
                key={tag.id}
                data-testid={"game-tag"}
                label={tag.tagName}
              />
            );
          })}
        </FlexRow>
      }
      growFlex
    />
  );
};

export const GameQuantitySelector = ({
  game,
  quantity,
  incrementQuantity,
  decrementQuantity,
}: {
  game: GameCartType;
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
}) => {
  return (
    <GameItemContent
      title={"Quantity"}
      content={
        <QuantitySelector
          quantity={quantity}
          onIncrementQuantity={incrementQuantity}
          onDecrementQuantity={decrementQuantity}
          game={game}
        />
      }
    />
  );
};
