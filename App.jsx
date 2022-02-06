import React from "react";
import { ScrollView, StyleSheet, View, SafeAreaView } from "react-native";
import AppFlatList from "./src/components/AppFlatList";
import AppImage from "./src/components/AppImage";
import AppModal from "./src/components/AppModal";
import AppTextInput from "./src/components/AppTextInput";
import AppKeyBoardAvoiding from "./src/components/KeyboardAvoidingView";
import AppPressable from "./src/components/Pressable";
import AppView from "./src/components/View";
// import { ScrollView } from "react-native-web";
// import { TextInput } from "react-native-web";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <AppImage />
      <AppPressable />
      <AppModal />
      <AppView />
      <AppFlatList />
      <AppKeyBoardAvoiding />
      <AppTextInput />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "teal",
    color: "white",
    paddingHorizontal: 20,
    paddingTop: 60,
    // paddingBottom: 70,
  },
});
