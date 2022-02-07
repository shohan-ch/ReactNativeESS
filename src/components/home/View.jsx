import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";

const Sperator = () => {
  return (
    <View
      style={{
        marginVertical: 10,
        borderBottomWidth: 1,
      }}
    ></View>
  );
};

const AppButton = () => (
  // <SafeAreaView>
  <View
    style={{
      justifyContent: "center",
      marginHorizontal: 20,
      borderWidth: 2,
      borderColor: "thistle",
      padding: 10,
      marginBottom: 20,
      paddingVertical: 20,
      marginTop: 20,
    }}
  >
    <Text>
      The title and onPress handler are required. It is recommended to set
      accessibilityLabel to help make your app usable by everyone.
    </Text>

    <Button
      // color={"#f194ff"}

      title="PRESS ME ONE"
      onPress={() => Alert.alert("Simple button pressed")}
    />
    <Sperator />

    <Text>
      Adjust the color in a way that looks standard on each platform. On iOS,
      the color prop controls the color of the text. On Android, the color
      adjusts the background color of the button.
    </Text>
    <Button
      title="PRESS ME"
      color={"#f194ff"}
      onPress={() => Alert.alert("Alert Button")}
    />
    <Sperator />

    <Text style={{ textAlign: "center", paddingBottom: 20 }}>
      This layout stategu lets the title define the width of the button.
    </Text>
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Button
        title="Left Button"
        color={"#f194ff"}
        onPress={() => Alert.alert("Alert Button")}
      />
      <Button
        title="Right Button"
        color={"#f194ff"}
        onPress={() => Alert.alert("Alert Button")}
      />
    </View>
  </View>
  // </SafeAreaView>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    padding: "50px",
  },
});
export default AppButton;
