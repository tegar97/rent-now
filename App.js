import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import GetStarted from "./screen/get-started/get-started";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Login from "./screen/login/login";

const Stack = createStackNavigator();

let customFonts = {
  "Gilroy-Light": require("./assets/fonts/Gilroy-Light.ttf"),
  "Gilroy-ExtraBold": require("./assets/fonts/Gilroy-ExtraBold.ttf"),
};
export default function App() {
  const [fontsLoad, setFontLoad] = useState(false);
  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync(customFonts);
      setFontLoad(true);
    }
    loadFont();
  }, []);
  if (fontsLoad) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Started">
          <Stack.Screen
            name="Started"
            component={GetStarted}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <AppLoading />;
  }
}
