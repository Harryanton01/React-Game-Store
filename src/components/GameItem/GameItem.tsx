import { Container, GameImage, ContentWrapper, Row } from "./styles";
import { GameType, GameCartType } from "../../shared/types/game";
import Text from "../../shared/components/Text/Text";
import GameItemContent from "./GameItemContent";
import { QuantitySelector } from "../QuantitySelector/QuantitySelector";
import AddGameButton from "../AddGameButton/AddGameButton";
import RemoveGameButton from "../RemoveGameButton/RemoveGameButton";
import useQuantitySelector from "../../hooks/useQuantitySelector";
import CurrencyValue from "../CurrencyValue/CurrencyValue";
import AdditionalGameContent from "./AdditionalGameContent";

const GameItem = ({
  game,
  showAdditionalContent,
}: {
  game: GameType;
  showAdditionalContent: boolean;
}) => {
  const gameCartItem: GameCartType = {
    ...game,
    quantity: 0,
  };

  const { gameQuantity, incrementQuantity, decrementQuantity } =
    useQuantitySelector(gameCartItem);

  const { img_src, description, amount_usd } = game;

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
        {showAdditionalContent && <AdditionalGameContent game={game} />}
        <GameItemContent
          title={"Quantity"}
          content={
            <QuantitySelector
              quantity={gameQuantity}
              onIncrementQuantity={incrementQuantity}
              onDecrementQuantity={decrementQuantity}
              game={gameCartItem}
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
          {showAdditionalContent ? (
            <AddGameButton game={gameCartItem} quantity={gameQuantity} />
          ) : (
            <RemoveGameButton game={gameCartItem} />
          )}
        </Row>
      </ContentWrapper>
    </Container>
  );
};

export default GameItem;
