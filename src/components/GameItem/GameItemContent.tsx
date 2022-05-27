import { FC } from "react";
import Text from "../../shared/components/Text/Text";
import { StyledColumn } from "./styles";
import { GameItemContentProps } from "./types";

const GameItemContent: FC<GameItemContentProps> = ({
  title,
  content,
  children,
  growFlex,
}) => {
  return (
    <StyledColumn growFlex={growFlex}>
      <Text fontSize="small" secondaryColor>
        {title}
      </Text>
      {content}
      {children}
    </StyledColumn>
  );
};

export default GameItemContent;
