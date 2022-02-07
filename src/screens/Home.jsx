import { Button, ScrollView, StyleSheet, View } from "react-native";
import AppFlatList from "../components/home/AppFlatList";
import AppImage from "../components/home/AppImage";
import AppModal from "../components/home/AppModal";
import AppTextInput from "../components/home/AppTextInput";
import AppKeyBoardAvoiding from "../components/home/KeyboardAvoidingView";
import AppPressable from "../components/home/Pressable";
import AppView from "../components/home/View";

export default ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <AppImage />
      <AppPressable />
      <AppModal />
      <AppView />
      <AppFlatList />
      <AppKeyBoardAvoiding />
      <AppTextInput />
      <View>
        <Button
          title="Go to Profile Screen"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "teal",
    color: "white",
    paddingHorizontal: 20,
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // paddingTop: 20,
  },
});
