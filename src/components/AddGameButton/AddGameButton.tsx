import { StyledButton, StyledDoneIcon } from "./styles";
import Text from "../../shared/components/Text/Text";
import AddIcon from "@mui/icons-material/Add";
import { GameCartType } from "../../shared/types/game";
import { CartStoreContext } from "../../store/CartStoreContext/CartStoreContextProvider";
import { useContext, useState, useEffect } from "react";

const AddGameButton: React.FC<{ game: GameCartType; quantity: number }> = ({
  game,
  quantity,
}) => {
  const { addGame, gameInCart, globalCartState } = useContext(CartStoreContext);
  const [disabled, setDisabled] = useState(gameInCart(game.id));
  const handleClick = (game: GameCartType) => {
    const updatedGame = { ...game, quantity };
    addGame(updatedGame);
  };
  useEffect(() => {
    setDisabled(gameInCart(game.id));
  }, [globalCartState]);
  return (
    <StyledButton
      startIcon={
        disabled ? (
          <StyledDoneIcon data-testid="add-game-done-icon" />
        ) : (
          <AddIcon data-testid="add-game-plus-icon" />
        )
      }
      onClick={handleClick.bind(null, game)}
      disabled={disabled}
    >
      <Text fontSize="extraSmall" fontBold>
        {disabled ? "ADDED" : "ADD TO BASKET"}
      </Text>
    </StyledButton>
  );
};

export default AddGameButton;
