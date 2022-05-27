import styled from "styled-components";
import FlexRow from "../../shared/components/Layout/FlexRow";
import FlexColumn from "../../shared/components/Layout/FlexColumn";
import { Divider } from "@mui/material";

export const Row = styled(FlexRow)`
  gap: 250px;
  justify-content: space-between;
`;

export const CenterRow = styled(FlexRow)`
  gap: 100px;
  padding: 30px;
  align-self: center;
`;

export const StyledDivider = styled(Divider)`
  && {
    width: 90%;
    border-color: ${(props) => props.theme.colors.lightGrey};
  }
`;

export const Column = styled(FlexColumn)`
  gap: 30px;
  padding: 30px;
  background-color: ${(props) => props.theme.colors.lightBlue};
  margin-top: 60px;
  margin-right: 20px;
  border-radius: 20px;
`;
