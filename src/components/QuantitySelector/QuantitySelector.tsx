import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton, Row } from "./styles";
import Text from "../../shared/components/Text/Text";
import { GameCartType } from "../../shared/types/game";

/**
 *
 * This was a confusing component for me. I know I didn't implement it correctly
 * but I couldn't figure out how to solve this with typescript.
 *
 */
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
        startIcon={<RemoveIcon />}
        onClick={onDecrementQuantity.bind(null, undefined)}
      />
      <Text fontSize={"small"}>{quantity}</Text>
      <IconButton
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
        startIcon={<RemoveIcon />}
        onClick={onDecrementQuantity.bind(null, game)}
      />
      <Text fontSize={"small"}>{quantity}</Text>
      <IconButton
        startIcon={<AddIcon />}
        onClick={onIncrementQuantity.bind(null, game)}
      />
    </Row>
  );
};
