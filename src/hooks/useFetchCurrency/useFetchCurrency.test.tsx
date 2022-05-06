import React, { ReactNode } from "react";
import "@testing-library/jest-dom";
import { renderHook, act, waitFor } from "@testing-library/react";
import useFetchCurrency from "./useFetchCurrency";
import { CurrencyContextProvider } from "../../store/CurrencyContext/CurrencyContext";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.MockedFunction<typeof axios>;

const wrapper = ({ children }: { children: ReactNode }) => (
  <CurrencyContextProvider>{children}</CurrencyContextProvider>
);

describe("Currency Context tests", () => {
  test("should have correct initial currency state", () => {
    const { result } = renderHook(() => useFetchCurrency(), {
      wrapper,
    });
    expect(result.current.currencyMultiplier).toBe(1);
    expect(result.current.currencyValue).toBe("EUR");
  });

  test("should fetch currency", async () => {
    const { result } = renderHook(() => useFetchCurrency(), {
      wrapper,
    });
    mockedAxios.mockResolvedValue({
      data: {
        base: "EUR",
        rates: {
          GBP: 1.5,
        },
      },
      status: 200,
      statusText: "Ok",
      headers: {},
      config: {},
    });
    act(() => {
      result.current.fetchLatestCurrency("GBP");
    });
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalled();
    });
    //expect(result.current.currencyMultiplier).toBe(1.5);
    //expect(result.current.currencyValue).toBe("GBP");
  });
});
