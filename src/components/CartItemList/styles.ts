import styled from "styled-components";
import FlexRow from "../../shared/components/Layout/FlexRow";
import FlexColumn from "../../shared/components/Layout/FlexColumn";

export const Row = styled(FlexRow)`
  justify-content: center;
  margin-top: 60px;
`;
export const RowItem = styled(FlexRow)`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
`;

export const RowItemWrapper = styled(FlexColumn)`
  gap: 60px;
  margin-top: 60px;
`;
