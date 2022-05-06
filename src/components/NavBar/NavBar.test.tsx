import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import Theme from "../../styles/Theme";
import GlobalStyles from "../../styles/global";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import { createMemoryHistory } from "history";

const NavBarWithTheme = (
  <Theme>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/cart" element={<div></div>} />
      </Routes>
    </BrowserRouter>
  </Theme>
);

describe("NavBar render tests", () => {
  test("should render Games Logo", () => {
    render(NavBarWithTheme);
    const logoElement = screen.getByText("Games");
    expect(logoElement).toBeInTheDocument();
  });

  test("should render Checkout button", () => {
    render(NavBarWithTheme);
    const buttonElement = screen.getByRole("button", { name: "CHECKOUT" });
    expect(buttonElement).toBeInTheDocument();
  });

  test("should render Currency Selector", () => {
    render(NavBarWithTheme);
    const selectElement = screen.getByTestId("currency-selector");
    expect(selectElement).toBeInTheDocument();
  });
});

describe("NavBar link routes", () => {
  test("should route to cart page", () => {
    const history = createMemoryHistory();
    history.push = jest.fn();
    render(
      <Theme>
        <Router location={history.location} navigator={history}>
          <NavBar />
          <Routes>
            <Route path="/" element={<div></div>} />
            <Route path="/cart" element={<div></div>} />
          </Routes>
        </Router>
      </Theme>
    );
    const buttonElement = screen.getByRole("button", { name: "CHECKOUT" });
    fireEvent.click(buttonElement);
    expect(history.push).toHaveBeenCalledWith(
      { hash: "", pathname: "/cart", search: "" },
      undefined
    );
  });

  test("should route back to game page", async () => {
    const history = createMemoryHistory();
    history.push = jest.fn();
    render(
      <Theme>
        <GlobalStyles />
        <Router location={"/cart"} navigator={history}>
          <NavBar />
          <Routes>
            <Route path="/" element={<div></div>} />
            <Route path="/cart" element={<div></div>} />
          </Routes>
        </Router>
      </Theme>
    );
    const logoElement = screen.getByText("Games");
    fireEvent.click(logoElement);
    expect(history.push).toHaveBeenCalledWith(
      { hash: "", pathname: "/", search: "" },
      undefined
    );
  });
});
