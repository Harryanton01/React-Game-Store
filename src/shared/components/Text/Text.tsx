import { FC, ReactNode } from "react";
import StyledText from "./styles";

export type TextProps = {
  secondaryColor?: boolean;
  children?: ReactNode;
  fontSize?: "extraSmall" | "small" | "large";
  fontBold?: boolean;
  className?: string;
  "data-testid"?: string;
};

const Text: FC<TextProps> = ({
  secondaryColor,
  fontSize,
  fontBold,
  className,
  children,
  "data-testid": dataTestId,
}) => {
  return (
    <StyledText
      data-testid={dataTestId}
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
