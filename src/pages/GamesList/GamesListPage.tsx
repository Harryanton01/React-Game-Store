import { Fragment } from "react";
import GameItemList from "../../components/GameItemList/GameItemList";
import useFetchGamesList from "../../hooks/useFetchGames";
import NavBar from "../../components/NavBar/NavBar";
import Text from "../../shared/components/Text/Text";

const GamesListPage = () => {
  const { gamesList } = useFetchGamesList();
  return (
    <Fragment>
      <NavBar
        TitleContent={
          <Text fontSize="large" fontBold>
            Games
          </Text>
        }
      />
      <GameItemList games={gamesList} />;
    </Fragment>
  );
};

export default GamesListPage;
