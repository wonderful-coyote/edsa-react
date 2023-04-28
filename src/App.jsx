import { React, useState } from "react";
import CurrencySwitcher from "./Components/CurrencySwitcher";
import Display from "./Components/Display";

import "./App.css";

function App() {
  const [currency, setCurrency] = useState("EUR");

  // const handleCurrencyChange = () => {
  //   //TODO: using traditional if else statement determine the new currency
  //   setCurrency(currency === "EUR" ? "USD" : "EUR");
  // };

  const handleCurrencyChange = () => {
    let newCurrency;
    if (currency === "USD") {
      newCurrency = "EUR";
    } else if (currency === "EUR") {
      newCurrency = "JPY";
    } else if (currency === "JPY") {
      newCurrency = "GBP";
    } else if (currency === "GBP") {
      newCurrency = "USD";
    }
    setCurrency(newCurrency);
  };
  

  return (
    <div>
      <Display currency={currency} />
      <CurrencySwitcher
        handleChangeCurrency={handleCurrencyChange}
        currency={currency}
      />
    </div>
  );
}

export default App;


