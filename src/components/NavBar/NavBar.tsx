import { Fragment, ReactNode } from "react";
import { Container } from "./styles";
import CheckoutButton from "../CheckoutButton/CheckoutButton";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import { Row } from "./styles";

const NavBar = ({ TitleContent }: { TitleContent: ReactNode }) => {
  return (
    <Fragment>
      <Container>
        <Row>{TitleContent}</Row>
        <Row>
          <CheckoutButton />
          <CurrencySelect />
        </Row>
      </Container>
    </Fragment>
  );
};

export default NavBar;
