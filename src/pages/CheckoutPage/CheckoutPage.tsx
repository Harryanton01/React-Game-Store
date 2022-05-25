import { Fragment } from "react";
import CartItemList from "../../components/CartItemList/CartItemList";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import Text from "../../shared/components/Text/Text";
import FlexColumn from "../../shared/components/Layout/FlexColumn";
import { StyledArrowIcon, Row } from "./styles";

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
              <Link to="/">
                <Text fontSize="small" secondaryColor>
                  <Row>
                    <StyledArrowIcon /> Go back to overview page
                  </Row>
                </Text>
              </Link>
            </FlexColumn>
          </Fragment>
        }
      />
      <CartItemList />
    </Fragment>
  );
};

export default CheckoutPage;
