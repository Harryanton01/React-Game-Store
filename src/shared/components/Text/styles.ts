import styled from "styled-components";
import { TextProps } from "./Text";

const StyledText = styled.span<TextProps>`
  color: ${(props) =>
    props.secondaryColor ? props.theme.colors.green : props.theme.colors.white};

  font-size: ${(props) => {
    switch (props.fontSize) {
      case "extraSmall":
        return props.theme.fontSizes.extraSmall;
      case "small":
        return props.theme.fontSizes.small;
      case "large":
        return props.theme.fontSizes.large;
      default:
        return props.theme.fontSizes.medium;
    }
  }};

  font-weight: ${(props) => (props.fontBold ? 700 : "normal")};
`;

export default StyledText;
