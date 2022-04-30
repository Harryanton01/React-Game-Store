import { Fragment } from "react";
import { Container } from "./styles";
import CheckoutButton from "../CheckoutButton/CheckoutButton";
import Text from "../../shared/components/Text/Text";
import { Link } from "react-router-dom";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import { Row } from "./styles";

const NavBar = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Link to="/">
            <Text fontSize="large" fontBold>
              Games
            </Text>
          </Link>
        </Row>
        <Row>
          <CheckoutButton />
          <CurrencySelect />
        </Row>
      </Container>
    </Fragment>
  );
};

export default NavBar;
