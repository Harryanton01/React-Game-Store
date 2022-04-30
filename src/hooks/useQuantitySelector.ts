import { useState } from "react";

const useQuantitySelector = () => {
  const [gameQuantity, setQuantity] = useState(1);
  const incrementQuantity = () => setQuantity(gameQuantity + 1);
  const decrementQuantity = () => {
    if (gameQuantity === 1) return;
    setQuantity(gameQuantity - 1);
  };
  return { gameQuantity, incrementQuantity, decrementQuantity };
};

export default useQuantitySelector;
