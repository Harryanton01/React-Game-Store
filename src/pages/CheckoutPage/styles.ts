import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FlexRow from "../../shared/components/Layout/FlexRow";

export const StyledArrowIcon = styled(ArrowBackIcon)`
  && {
    width: 0.8em;
    height: 0.8em;
  }
`;

export const Row = styled(FlexRow)`
  justify-content: center;
  align-items: center;
`;
