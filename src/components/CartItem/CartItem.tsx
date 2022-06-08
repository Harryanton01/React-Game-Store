import { Container, GameImage, ContentWrapper, Row } from "../GameItem/styles";
import { GameCartType, GameType } from "../../shared/types/game";
import Text from "../../shared/components/Text/Text";
import { GameTitle, GameQuantitySelector } from "../GameItem/GameItemContent";
import RemoveGameButton from "../RemoveGameButton/RemoveGameButton";
import useQuantitySelector from "../QuantitySelector/useQuantitySelector";
import CurrencyValue from "../CurrencyValue/CurrencyValue";

const CartItem = ({ game }: { game: GameType }) => {
  const gameCart: GameCartType = { ...game, quantity: 1 };
  const { img_src, amount_usd, description } = game;
  const { gameQuantity, incrementQuantity, decrementQuantity } =
    useQuantitySelector(gameCart);
  return (
    <Container data-testid="game-item-list">
      <GameImage src={img_src} alt="Game Image" />
      <ContentWrapper>
        <GameTitle description={description} />
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
          <RemoveGameButton game={gameCart} />
        </Row>
      </ContentWrapper>
    </Container>
  );
};

export default CartItem;
