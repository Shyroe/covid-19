import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Routes from "./src/main.routes";
import CountryProvider from "./src/context/CountryState";
import { CountryContext } from "./src/context/CountryState";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <CountryProvider>
        <Routes />
      </CountryProvider>
    </>
  );
}
