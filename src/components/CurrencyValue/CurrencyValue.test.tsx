import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CurrencyValue from "./CurrencyValue";

const CurrencyValueComponent = (
  <CurrencyValue data-testid={"currency-value-test"} amount={21.5} />
);

describe("Currency value tests", () => {
  test("should render correct currency based on initial context", () => {
    render(CurrencyValueComponent);
    const currencyValue = screen.getByTestId("currency-value-test");
    expect(currencyValue).toHaveTextContent("21.50€");
  });
});
