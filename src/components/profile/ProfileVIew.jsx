import React from "react";
import { Alert, Button, View, Text, TextInput } from "react-native";

export default ({ navigation }) => {
  return (
    <View style={{ borderWidth: 3, borderColor: "indigo", padding: 15 }}>
      <Text style={{ marginBottom: 10 }}>User Profile view </Text>

      <Text style={{ marginBottom: 20 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque
        adipisci et illum nulla illo voluptates totam veniam autem fugiat.
      </Text>

 <TextInput placeholder="Write something"/>

      <Button
        title="Go Home Screen From Child"
        onPress={() => navigation.navigate("Home")}
      ></Button>
    </View>
  );
};
