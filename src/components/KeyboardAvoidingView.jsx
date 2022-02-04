import {
  Alert,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  PlatformColor,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const AppKeyBoardAvoiding = () => {
  return (
    <KeyboardAvoidingView
      behavior={PlatformColor.OS === "ios" ? "padding" : "height"}
      style={{
        backgroundColor: "coral",
        padding: 20,
        marginBottom: 20,
      }}
    >
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <View>
        <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}>
          KeyBoard Avoiding View
        </Text>
        <TextInput
          placeholder="User Name"
          style={{
            borderWidth: 2,
            borderStyle: "dotted",
            borderColor: "grey",
            marginBottom: 30,
          }}
        />
        <Button title="Submit" onPress={() => Alert.alert("Button Click")} />
      </View>
      {/* </TouchableWithoutFeedback> */}
    </KeyboardAvoidingView>
  );
};

export default AppKeyBoardAvoiding;
