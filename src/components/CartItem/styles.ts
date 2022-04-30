import styled from "styled-components";
import FlexRow from "../../shared/components/Layout/FlexRow";
import GameItemContent from "../GameItem/GameItemContent";

export const Row = styled(FlexRow)`
  justify-content: space-between;
  align-items: center;
  flex-basis: 550px;
  gap: 150px;
`;

export const CartItemContent = styled(GameItemContent)`
  flex: 0;
`;
