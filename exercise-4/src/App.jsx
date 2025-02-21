import React from "react";

function App() {
  /* Constants used in this component */
  const DOLLAR_TO_EURO_RATIO = 0.92;
  const DOLLAR_TO_DONG_RATIO = 24560;

  let valueDollars = 15;

  // TODO : You need to implement and call this function in your JSX code
  // Convert the given value in dollars to a value in euro
  function dollarToEuro(valueInDollars) {
    return valueInDollars * DOLLAR_TO_EURO_RATIO;
  }

  // TODO : You need to implement and call this function in your JSX code
  // Convert the given value in dollars to a value in dong
  function dollarToDong(valueInDollars) {
    return valueInDollars * DOLLAR_TO_DONG_RATIO;
  }

  // Compute the converted values
  const valueInEuro = dollarToEuro(valueDollars);
  const valueInDong = dollarToDong(valueDollars);

  return (
    <main>
      <h1>Device conversions</h1>

      <p>
        <label>Current value in dollars</label>
        <input disabled value={valueDollars} />

        {/* This input now displays the value in Dong */}
        <label>Value in Dong</label>
        <input disabled value={valueInDong} />

        {/* This input now displays the value in Euro */}
        <label>Value in Euro</label>
        <input disabled value={valueInEuro} />
      </p>
    </main>
  );
}

export default App;
