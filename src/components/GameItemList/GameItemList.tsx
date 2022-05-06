import { GameType } from "../../shared/types/game";
import GameItem from "../GameItem/GameItem";
import { Column } from "./styles";
import CurrencyError from "../CurrencyError/CurrencyError";

const GameItemList = ({ games }: { games: GameType[] }) => {
  return (
    <Column>
      <CurrencyError />
      {games.map((gameItem) => {
        return <GameItem key={gameItem.id} game={gameItem} />;
      })}
    </Column>
  );
};

export default GameItemList;
