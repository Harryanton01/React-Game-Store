import styled from "styled-components";
import FlexRow from "../../shared/components/Layout/FlexRow";
import FlexColumn from "../../shared/components/Layout/FlexColumn";

export const Row = styled(FlexRow)`
  margin-top: 60px;
`;

export const RowItemWrapper = styled(FlexColumn)`
  flex: 1;
  gap: 30px;
  margin-top: 60px;
`;
