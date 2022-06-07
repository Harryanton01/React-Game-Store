import { Fragment } from "react";
import CartItemList from "../../components/CartItemList/CartItemList";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import Text from "../../shared/components/Text/Text";
import FlexColumn from "../../shared/components/Layout/FlexColumn";
import {
  StyledArrowIcon,
  Row,
  NavBarRow,
  CartTotalOrderWrapper,
} from "./styles";
import CartTotalOrder from "../../components/CartTotalOrder/CartTotalOrder";

const CheckoutPage = () => {
  return (
    <Fragment>
      <NavBar
        TitleContent={
          <Fragment>
            <FlexColumn>
              <Text fontSize="large" fontBold>
                Checkout
              </Text>
              <Link to="/list">
                <Text fontSize="small" secondaryColor>
                  <NavBarRow>
                    <StyledArrowIcon /> Go back to overview page
                  </NavBarRow>
                </Text>
              </Link>
            </FlexColumn>
          </Fragment>
        }
      />
      <Row>
        <CartItemList />
        <CartTotalOrderWrapper>
          <CartTotalOrder />
        </CartTotalOrderWrapper>
      </Row>
    </Fragment>
  );
};

export default CheckoutPage;
