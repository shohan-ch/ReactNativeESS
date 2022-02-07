import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        ></Stack.Screen>

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Profile Screen" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
