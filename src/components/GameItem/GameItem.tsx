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

const GameItem = ({ game }: { game: GameType }) => {
  const { gameQuantity, incrementQuantity, decrementQuantity } =
    useQuantitySelector();
  const { img_src, description, rating, tags, amount_usd, quantity, id } = game;
  const gameCartItem: GameCartType = {
    id,
    amount_usd,
    description,
    quantity: quantity || 1,
  };

  return (
    <Container data-testid={"game-item-list"}>
      <GameImage src={img_src} alt={"Game Image"} />
      <ContentWrapper>
        <GameItemContent
          title={
            <span data-testid={"game-date"}>
              {`Released - ${description.release_date.toLocaleDateString(
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
        <GameItemContent
          title={"Quantity"}
          content={
            <QuantitySelector
              quantity={gameQuantity}
              onIncrementQuantity={incrementQuantity}
              onDecrementQuantity={decrementQuantity}
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
