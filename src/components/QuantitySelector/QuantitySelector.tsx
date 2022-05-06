import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton, Row } from "./styles";
import Text from "../../shared/components/Text/Text";

type QuantitySelectorProps<T> = {
  onIncrementQuantity: (game: T) => void;
  onDecrementQuantity: (game: T) => void;
  quantity: number;
  game: T;
};

export const QuantitySelector = <T extends unknown>({
  onIncrementQuantity,
  onDecrementQuantity,
  quantity,
  game,
}: QuantitySelectorProps<T>) => {
  return (
    <Row>
      <IconButton
        data-testid={"decrement-quantity-button"}
        startIcon={<RemoveIcon />}
        onClick={() => onDecrementQuantity(game)}
      />
      <Text data-testid={"quantity-value"} fontSize={"small"}>
        {quantity}
      </Text>
      <IconButton
        data-testid={"increment-quantity-button"}
        startIcon={<AddIcon />}
        onClick={() => onIncrementQuantity(game)}
      />
    </Row>
  );
};
