import { Row } from "./styles";
import { CartItemContent } from "./styles";
import useCartUpdate from "../../hooks/useCartUpdate/useCartUpdate";
import { GameCartType } from "../../shared/types/game";
import { UpdateGameQuantity } from "../QuantitySelector/QuantitySelector";
import Text from "../../shared/components/Text/Text";
import CurrencyValue from "../CurrencyValue/CurrencyValue";

const CartItem = ({ game }: { game: GameCartType }) => {
  const { gameQuantity, updateGameAdd, updateGameRemove } = useCartUpdate(game);
  return (
    <Row>
      <CartItemContent
        title={"Title"}
        content={<Text fontBold>{game.description.title}</Text>}
      />
      <Text fontBold>
        <CurrencyValue
          data-testid={"cart-game-currency"}
          amount={game.amount_usd}
        />
      </Text>
      <UpdateGameQuantity
        game={game}
        onIncrementQuantity={updateGameAdd}
        onDecrementQuantity={updateGameRemove}
        quantity={gameQuantity}
      />
    </Row>
  );
};

export default CartItem;
