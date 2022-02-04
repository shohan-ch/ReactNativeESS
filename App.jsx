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
// import { ScrollView } from "react-native-web";
// import { TextInput } from "react-native-web";

export default function App() {
  const [text, setText] = useState("write");
  return (
    <ScrollView style={styles.container}>
      <AppImage />
      <AppView />
      <AppFlatList />
      <AppKeyBoardAvoiding />

      <View
        style={{
          paddingHorizontal: 20,
          // paddingBottom: 40,
          backgroundColor: "#f194ff",
          marginBottom: 100,
        }}
      >
        <Text style={{ color: "#fff" }}>Write something</Text>
        <Home />
        <TextInput
          placeholder="Type anything"
          onChangeText={(text) => setText(text)}
        />
        <StatusBar style="auto" />
        <Text>{text}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "teal",
    // alignItems: "center",
    // justifyContent: "center",
    color: "white",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 70,
  },
});
