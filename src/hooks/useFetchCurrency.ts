import axios from "axios";
import { useEffect, useState } from "react";
import { CurrencySelectors } from "../store/CurrencyContext/types";

const useFetchCurrency = () => {
  const [currency, setCurrency] = useState<CurrencySelectors>("EUR");
  const [currencyMultiplier, setCurrencyMultiplier] = useState(1);
  const updateCurrency = (currency: CurrencySelectors) => {
    setCurrency(currency);
  };
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("http://api.exchangeratesapi.io/v1/lates", {
        params: {
          access_key: "716b8a7b76f260f5d506a9d5e0b2ee5a",
          symbols: currency,
        },
      })
      .then((res) => {
        setCurrencyMultiplier(res.data.rates[`${currency}`]);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      controller.abort();
    };
  }, [currency]);

  return { currencyMultiplier, updateCurrency, currency };
};

export default useFetchCurrency;
