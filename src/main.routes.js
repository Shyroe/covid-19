import React, { useContext } from "react";

//Context
import { CountryContext } from "./context/CountryState";

// pages
import Home from "./pages/Home";
import Country from "./pages/Country";
import StatesDetail from "./pages/StatesDetail";
import DiaryCases from "./pages/DiaryCases";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

// options

const headerOptions = {
  headerTintColor: "#eee",
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: "#333",
  },
};

export default () => {
  const { selectedCountryName } = useContext(CountryContext);
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          options={{ ...headerOptions, title: "Covid-19" }}
          name="Home"
          component={Home}
        />
        <AppStack.Screen
          options={{ ...headerOptions, title: selectedCountryName }}
          name="Country"
          component={Country}
        />
        <AppStack.Screen
          options={{ ...headerOptions, title: "Situação do Estado" }}
          name="StatesDetail"
          component={StatesDetail}
        />
        <AppStack.Screen
          options={{ ...headerOptions, title: "Casos diários" }}
          name="DiaryCases"
          component={DiaryCases}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

// export default Routes;
