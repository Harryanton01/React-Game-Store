import styled from "styled-components";
import Button from "../../shared/components/Button/Button";

export const StyledButton = styled(Button)`
  &&& {
    background-color: ${(props) => props.theme.colors.lightGrey};
    width: 9.375rem;
    padding: 6px 12px;
  }
`;
