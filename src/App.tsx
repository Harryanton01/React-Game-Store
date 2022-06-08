import Theme from "./styles/Theme";
import GlobalStyles from "./styles/global";
import { CartStoreContextProvider } from "./store/CartStoreContext/CartStoreContextProvider";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { CurrencyContextProvider } from "./store/CurrencyContext/CurrencyContextProvider";
import CurrencyError from "./components/CurrencyError/CurrencyError";
import GamesListPage from "./pages/GamesList/GamesListPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

const App = () => {
  return (
    <CurrencyContextProvider>
      <CartStoreContextProvider>
        <Theme>
          <GlobalStyles />
          <BrowserRouter>
            <CurrencyError />
            <Routes>
              <Route path="/" element={<Navigate to="/list" />} />
              <Route path="/list" element={<GamesListPage />} />
              <Route path="/cart" element={<CheckoutPage />} />
            </Routes>
          </BrowserRouter>
        </Theme>
      </CartStoreContextProvider>
    </CurrencyContextProvider>
  );
};

export default App;
