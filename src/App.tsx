import Theme from "./styles/Theme";
import NavBar from "./components/NavBar/NavBar";
import GlobalStyles from "./styles/global";
import games from "./games";
import { CartStoreContextProvider } from "./store/CartStoreContext/CartStoreContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import GameItemList from "./components/GameItemList/GameItemList";
import CartItemList from "./components/CartItemList/CartItemList";
import { CurrencyContextProvider } from "./store/CurrencyContext/CurrencyContext";
import CurrencyError from "./components/CurrencyError/CurrencyError";

const App = () => {
  return (
    <CurrencyContextProvider>
      <CartStoreContextProvider>
        <Theme>
          <GlobalStyles />
          <BrowserRouter>
            <NavBar />
            <CurrencyError />
            <Routes>
              <Route path="/" element={<GameItemList games={games} />} />
              <Route path="/cart" element={<CartItemList />} />
            </Routes>
          </BrowserRouter>
        </Theme>
      </CartStoreContextProvider>
    </CurrencyContextProvider>
  );
};

export default App;
