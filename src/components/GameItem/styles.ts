import styled from "styled-components";
import FlexRow from "../../shared/components/Layout/FlexRow";
import FlexColumn from "../../shared/components/Layout/FlexColumn";
import { GrowFlexProps } from "./types";
import { Rating, Chip } from "@mui/material";

export const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.lightBlue};
  border-radius: 20px;
  margin: 0 20px;
  gap: 30px;
`;

export const GameImage = styled.img`
  height: 110px;
  max-width: 100px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
`;

export const StyledColumn = styled(FlexColumn)<GrowFlexProps>`
  gap: 10px;
  flex: ${(props) => (props.growFlex ? 3 : 2)};
`;

export const Row = styled(FlexRow)`
  flex: 2;
  justify-content: center;
`;

export const Grow = styled(FlexRow)`
  flex: 3;
`;

export const StyledRating = styled(Rating)`
  &&& {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const StyledChip = styled(Chip)`
  &&& {
    color: ${(props) => props.theme.colors.grey};
    background-color: ${(props) => props.theme.colors.darkBlue};
    height: 24px;
  }
`;
