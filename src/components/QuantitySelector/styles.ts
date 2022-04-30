import styled from "styled-components";
import Button from "../../shared/components/Button/Button";
import FlexRow from "../../shared/components/Layout/FlexRow";

export const IconButton = styled(Button)`
  && {
    background-color: #303550;
    min-width: 0;
    padding: 2px;

    .MuiSvgIcon-root {
      font-size: 14px;
    }
  }
  & > .MuiButton-startIcon {
    margin-right: 0;
    margin-left: 0;
    font-size: 14px;
  }
`;

export const Row = styled(FlexRow)`
  gap: 10px;
`;
