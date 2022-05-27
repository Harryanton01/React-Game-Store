import { StyledButton } from "./styles";
import Text from "../../shared/components/Text/Text";
import { GameCartType } from "../../shared/types/game";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { CartStoreContext } from "../../store/CartStoreContext/CartStoreContext";
import useQuantitySelector from "../../hooks/useQuantitySelector";

const RemoveGameButton: React.FC<{ game: GameCartType }> = ({ game }) => {
  const { removeGame } = useContext(CartStoreContext);
  const { gameQuantity } = useQuantitySelector(game);
  const handleClick = (game: GameCartType) => {
    let updatedGame = { ...game, quantity: gameQuantity };
    removeGame(updatedGame);
  };
  return (
    <StyledButton
      startIcon={<DeleteIcon />}
      onClick={handleClick.bind(null, game)}
    >
      <Text fontSize={"extraSmall"} fontBold>
        REMOVE
      </Text>
    </StyledButton>
  );
};

export default RemoveGameButton;
