import React, { createContext, useState } from "react";

export const CountryContext = createContext();

const CountryProvider = (props) => {
  const [selectedCountryName, setSelectedCountryName] = useState("Australia");

  return (
    <CountryContext.Provider
      value={{
        selectedCountryName,
        setSelectedCountryName,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
