import React, { Component } from "react";
import { Pressable, Text, View, Alert } from "react-native";

class AppPressable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <View style={{ backgroundColor: "indigo", padding: 30, marginTop: 15 }}>
        <Text style={{ color: "#fff" }}>Pressable</Text>
        <Pressable
          onPress={() =>
            this.setState((prevState) => ({ count: prevState.count + 1 }))
          }
        >
          <Text
            style={{
              color: "#fff",
              marginTop: 10,
              backgroundColor: "coral",
              width: 120,
              padding: 10,
              marginBottom: 10,
            }}
          >
            Preessable Text{" "}
          </Text>
        </Pressable>
        <Text style={{ color: "#fff" }}>Clicked: {this.state.count}</Text>
      </View>
    );
  }
}

export default AppPressable;
