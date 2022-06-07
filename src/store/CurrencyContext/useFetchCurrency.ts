import axios from "axios";
import { useState, useEffect } from "react";
import { CurrencySelectors, CurrencySymbol } from "./types";
import { currencies } from "../../currencies";

const useFetchCurrency = () => {
  const [currencyValue, setCurrencyValue] = useState<CurrencySelectors>("EUR");
  const [currencyMultiplier, setCurrencyMultiplier] = useState(1);
  const [currencySymbol, setCurrencySymbol] = useState<CurrencySymbol>("€");
  const [symbolBeforeValue, setSymbolBeforeValue] = useState(false);
  const [error, setError] = useState(false);

  const fetchLatestCurrency = async (currency: CurrencySelectors) => {
    try {
      const response = await axios.get(
        "http://api.exchangeratesapi.io/v1/latest",
        {
          params: {
            access_key: "716b8a7b76f260f5d506a9d5e0b2ee5a",
            symbols: currency,
          },
        }
      );
      const newMultiplier = await response.data;
      if (response.status === 200) {
        setCurrencyValue(currency);
        setCurrencyMultiplier(newMultiplier.rates[`${currency}`]);
        setError(false);
      }
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    const symbol = currencies.find((currency) => {
      return currency.value === currencyValue;
    });

    if (symbol) {
      setCurrencySymbol(symbol.symbol as CurrencySymbol);
      setSymbolBeforeValue(symbol.symbolBeforeValue);
    }
  }, [currencyValue]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setError(false);
    }, 5000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [error]);

  return {
    currencyMultiplier,
    fetchLatestCurrency,
    currencyValue,
    currencySymbol,
    symbolBeforeValue,
    error,
  };
};

export default useFetchCurrency;
