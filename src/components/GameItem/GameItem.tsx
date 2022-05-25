import {
  Container,
  GameImage,
  ContentWrapper,
  Row,
  StyledRating,
  StyledChip,
} from "./styles";
import { GameType, GameCartType } from "../../shared/types/game";
import Text from "../../shared/components/Text/Text";
import GameItemContent from "./GameItemContent";
import FlexRow from "../../shared/components/Layout/FlexRow";
import { QuantitySelector } from "../QuantitySelector/QuantitySelector";
import AddGameButton from "../AddGameButton/AddGameButton";
import useQuantitySelector from "../../hooks/useQuantitySelector";
import CurrencyValue from "../CurrencyValue/CurrencyValue";
import { Fragment } from "react";

const GameContent = ({ game }: { game: GameType }) => {
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

const GameItem = ({ game, long }: { game: GameType; long: boolean }) => {
  const { gameQuantity, incrementQuantity, decrementQuantity } =
    useQuantitySelector();

  const { img_src, description, amount_usd, id } = game;

  const gameCartItem: GameCartType = {
    ...game,
    quantity: 1,
  };

  return (
    <Container data-testid={"game-item-list"}>
      <GameImage src={img_src} alt={"Game Image"} />
      <ContentWrapper>
        <GameItemContent
          title={
            <span data-testid={"game-date"}>
              {`Released - ${new Date(
                description.release_date
              ).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}`}
            </span>
          }
          content={<Text fontBold>{description.title}</Text>}
          growFlex
        />
        {long && <GameContent game={game} />}
        <GameItemContent
          title={"Quantity"}
          content={
            <QuantitySelector
              quantity={gameQuantity}
              onIncrementQuantity={incrementQuantity}
              onDecrementQuantity={decrementQuantity}
              game={undefined}
            />
          }
        />
        <Row>
          <Text fontSize="large" fontBold>
            <CurrencyValue
              data-testid={"game-currency-value"}
              amount={amount_usd}
            />
          </Text>
        </Row>
        <Row>
          <AddGameButton game={gameCartItem} quantity={gameQuantity} />
        </Row>
      </ContentWrapper>
    </Container>
  );
};

export default GameItem;
