import axios from "axios";
import { useState, useEffect } from "react";
import { GameType } from "../shared/types/game";

const useFetchGamesList = () => {
  const [gamesList, setGamesList] = useState<GameType[]>([]);

  const fetchGamesList = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/games");
      const gamesList = await response.data;
      if (response.status === 200) {
        setGamesList(gamesList);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchGamesList();
  }, []);

  return { gamesList };
};

export default useFetchGamesList;
