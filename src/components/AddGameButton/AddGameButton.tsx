import { StyledButton, StyledDoneIcon } from "./styles";
import Text from "../../shared/components/Text/Text";
import AddIcon from "@mui/icons-material/Add";
import { GameCartType } from "../../shared/types/game";
import useButtonAdd from "../../hooks/useButtonAdd";
import { addGameToCart } from "../../store/CartStoreContext/CartStore";

const AddGameButton: React.FC<{ game: GameCartType; quantity: number }> = ({
  game,
  quantity,
}) => {
  const { disabled, dispatch } = useButtonAdd(game);
  const handleClick = (game: GameCartType) => {
    const updatedGame = { ...game, quantity: quantity };
    dispatch(addGameToCart(updatedGame));
  };
  return (
    <StyledButton
      startIcon={disabled ? <StyledDoneIcon /> : <AddIcon />}
      onClick={handleClick.bind(null, game)}
      disabled={disabled}
    >
      <Text fontSize={"extraSmall"} fontBold>
        {disabled ? "ADDED" : "ADD TO BASKET"}
      </Text>
    </StyledButton>
  );
};

export default AddGameButton;
