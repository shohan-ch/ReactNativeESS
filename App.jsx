import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  SafeAreaView,
} from "react-native";
import AppView from "./src/components/View";
import Home from "./src/components/Home";
import AppFlatList from "./src/components/AppFlatList";
import AppImage from "./src/components/AppImage";
import AppKeyBoardAvoiding from "./src/components/KeyboardAvoidingView";
import AppModal from "./src/components/AppModal";
import AppPressable from "./src/components/Pressable";
import AppTextInput from "./src/components/AppTextInput";
// import { ScrollView } from "react-native-web";
// import { TextInput } from "react-native-web";

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
