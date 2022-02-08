import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "royalblue",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        ></Stack.Screen>

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "Profile Screen",

            headerRight: () => (
              <Button
                onPress={() => alert("This is a button! text")}
                title="Info"
                color="indigo"
              />
            ),
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
