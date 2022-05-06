import { StyledButton, StyledDoneIcon } from "./styles";
import Text from "../../shared/components/Text/Text";
import AddIcon from "@mui/icons-material/Add";
import { GameCartType } from "../../shared/types/game";
import useButtonAdd from "../../hooks/useButtonAdd";
import { addGameToCart } from "../../store/CartStoreContext/CartStoreContext";

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
      startIcon={
        disabled ? (
          <StyledDoneIcon data-testid={"add-game-done-icon"} />
        ) : (
          <AddIcon data-testid={"add-game-plus-icon"} />
        )
      }
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
