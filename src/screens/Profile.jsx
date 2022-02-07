import { Button, Text, View } from "react-native";
import ProfileVIew from "../components/profile/ProfileVIew";

export default ({ navigation, route }) => {
  return (
    <View style={{ backgroundColor: "coral", padding: 30, height: "100%" }}>
      <ProfileVIew navigation={navigation} />

      <View style={{ marginTop: 20 }}>
        <Button
          title="Go back to home screen"
          onPress={() => navigation.navigate("Home")}
          color={"indigo"}
        />

        <Text style={{ backgroundColor: "#fff", marginTop: 10, padding: 8 }}>
          Parameter: {route.params.name} sent from Home screen.{" "}
        </Text>
      </View>
    </View>
  );
};
