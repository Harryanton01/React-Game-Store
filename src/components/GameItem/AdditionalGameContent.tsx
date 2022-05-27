import { Fragment } from "react";
import { GameType } from "../../shared/types/game";
import GameItemContent from "./GameItemContent";
import { StyledRating, StyledChip } from "./styles";
import FlexRow from "../../shared/components/Layout/FlexRow";

const AdditionalGameContent = ({ game }: { game: GameType }) => {
  const { rating, tags } = game;
  return (
    <Fragment>
      <GameItemContent
        title={"Rating"}
        content={
          <StyledRating data-testid={"rating"} value={rating} readOnly />
        }
        growFlex
      />
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
    </Fragment>
  );
};

export default AdditionalGameContent;
