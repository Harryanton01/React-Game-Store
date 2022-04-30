import { FC, ReactNode } from "react";
import StyledText from "./styles";

export type TextProps = {
  secondaryColor?: boolean;
  children?: ReactNode;
  fontSize?: "extraSmall" | "small" | "large";
  fontBold?: boolean;
  className?: string;
};

const Text: FC<TextProps> = ({
  secondaryColor,
  fontSize,
  fontBold,
  className,
  children,
}) => {
  return (
    <StyledText
      secondaryColor={secondaryColor}
      fontSize={fontSize}
      fontBold={fontBold}
      className={className}
    >
      {children}
    </StyledText>
  );
};

export default Text;
