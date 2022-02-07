import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
class AppTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  render() {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          backgroundColor: "#f194ff",
          marginBottom: 20,
          paddingVertical: 20,
        }}
      >
        <Text style={{ color: "#fff" }}>Write something</Text>
        <TextInput
          placeholder="Type anything"
          onChangeText={(value) => this.setState({ text: value })}
          style={{ borderWidth: 1, borderColor: "coral", marginVertical: 10 }}
        />

        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

export default AppTextInput;
