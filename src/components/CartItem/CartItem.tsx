import { Row } from "./styles";
import { CartItemContent } from "./styles";
import { GameCartType } from "../../shared/types/game";
import { QuantitySelector } from "../QuantitySelector/QuantitySelector";
import Text from "../../shared/components/Text/Text";
import CurrencyValue from "../CurrencyValue/CurrencyValue";

const CartItem = ({ game }: { game: GameCartType }) => {
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
    </Row>
  );
};

export default CartItem;
