import styled from "styled-components";
import FlexRow from "../../shared/components/Layout/FlexRow";
import Text from "../../shared/components/Text/Text";

export const RowWrapper = styled(FlexRow)`
  justify-content: center;
  margin-top: 30px;
`;

export const Row = styled(FlexRow)`
  background-color: ${(props) => props.theme.colors.errorLight};
  flex: 1;
  justify-content: center;
  max-width: 60%;
  padding: 10px;
`;

export const StyledText = styled(Text)`
  color: ${(props) => props.theme.colors.errorDark};
`;
