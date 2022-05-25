import { useContext } from "react";
import { CurrencyContext } from "../../store/CurrencyContext/CurrencyContext";
import { Row, RowWrapper } from "./styles";
import { StyledText } from "./styles";

const CurrencyError = () => {
  const { globalCurrencyState } = useContext(CurrencyContext);
  return globalCurrencyState.error ? (
    <RowWrapper>
      <Row>
        <StyledText fontBold>
          There was an error fetching the currency...
        </StyledText>
      </Row>
    </RowWrapper>
  ) : null;
};

export default CurrencyError;
