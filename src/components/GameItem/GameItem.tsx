import { Container, GameImage, ContentWrapper, Row } from "./styles";
import { GameType, GameCartType } from "../../shared/types/game";
import Text from "../../shared/components/Text/Text";
import {
  GameTitle,
  GameQuantitySelector,
  GameRating,
  GameTags,
} from "./GameItemContent";
import AddGameButton from "../AddGameButton/AddGameButton";
import useQuantitySelector from "../../hooks/useQuantitySelector";
import CurrencyValue from "../CurrencyValue/CurrencyValue";

const GameItem = ({ game }: { game: GameType }) => {
  const gameCart: GameCartType = { ...game, quantity: 1 };
  const { img_src, amount_usd, description, rating, tags } = game;
  const { gameQuantity, incrementQuantity, decrementQuantity } =
    useQuantitySelector(gameCart);
  return (
    <Container data-testid="game-item-list">
      <GameImage src={img_src} alt="Game Image" />
      <ContentWrapper>
        <GameTitle description={description} />
        <GameRating rating={rating} />
        <GameTags tags={tags} />
        <GameQuantitySelector
          game={gameCart}
          quantity={gameQuantity}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
        <Row>
          <Text fontSize="large" fontBold>
            <CurrencyValue
              data-testid="game-currency-value"
              amount={amount_usd}
            />
          </Text>
        </Row>
        <Row>
          <AddGameButton game={gameCart} quantity={gameQuantity} />
        </Row>
      </ContentWrapper>
    </Container>
  );
};

export default GameItem;
