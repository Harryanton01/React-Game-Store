import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton, Row } from "./styles";
import Text from "../../shared/components/Text/Text";
import { GameCartType } from "../../shared/types/game";

type QuantitySelectorProps<T = undefined> = {
  onIncrementQuantity: (game?: T) => void;
  onDecrementQuantity: (game?: T) => void;
  quantity: number;
  game?: T;
};

export const QuantitySelector = ({
  onIncrementQuantity,
  onDecrementQuantity,
  quantity,
}: QuantitySelectorProps) => {
  return (
    <Row>
      <IconButton
        data-testid={"decrement-quantity-button"}
        startIcon={<RemoveIcon />}
        onClick={onDecrementQuantity.bind(null, undefined)}
      />
      <Text data-testid={"quantity-value"} fontSize={"small"}>
        {quantity}
      </Text>
      <IconButton
        data-testid={"increment-quantity-button"}
        startIcon={<AddIcon />}
        onClick={onIncrementQuantity.bind(null, undefined)}
      />
    </Row>
  );
};

export const UpdateGameQuantity = ({
  onIncrementQuantity,
  onDecrementQuantity,
  quantity,
  game,
}: QuantitySelectorProps<GameCartType>) => {
  return (
    <Row>
      <IconButton
        data-testid={"decrement-quantity-button"}
        startIcon={<RemoveIcon />}
        onClick={onDecrementQuantity.bind(null, game)}
      />
      <Text data-testid={"quantity-value"} fontSize={"small"}>
        {quantity}
      </Text>
      <IconButton
        data-testid={"increment-quantity-button"}
        startIcon={<AddIcon />}
        onClick={onIncrementQuantity.bind(null, game)}
      />
    </Row>
  );
};
