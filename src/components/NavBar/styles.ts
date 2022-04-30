import styled from "styled-components";
import FlexRow from "../../shared/components/Layout/FlexRow";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  background-color: ${(props) => props.theme.colors.darkerBlue};
  padding: 16px 20px;
`;

export const Row = styled(FlexRow)`
  gap: 40px;
  align-items: center;
`;
