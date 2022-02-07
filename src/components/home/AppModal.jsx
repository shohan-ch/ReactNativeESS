import {
  Button,
  Text,
  Alert,
  Modal,
  View,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";

const AppModal = () => {
  const [modalVisiable, setModalVisiable] = useState(false);

  return (
    <View style={{ backgroundColor: "coral", padding: 25, marginTop: 20 }}>
      <Text style={{ fontSize: 30 }}>Modal</Text>

      <Modal
        visible={modalVisiable}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisiable(!modalVisiable)}
        // onShow={() => Alert.alert("Hello modal")}
        // statusBarTranslucent={true}
      >
        <TouchableWithoutFeedback
          onPress={() => setModalVisiable(!modalVisiable)}
        >
          <View style={styles.container}>
            <Text>Modal Title</Text>
            <Text style={{ marginBottom: 20 }}>
              React native modal text. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Quae, dicta?
            </Text>

            <Button
              title="Hide Modal"
              onPress={() => setModalVisiable(!modalVisiable)}
            ></Button>

            <Pressable
              onPress={() => setModalVisiable(!modalVisiable)}
              style={{ backgroundColor: "coral", padding: 10, marginTop: 15 }}
            >
              <Text>Preesable Hide</Text>
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <View style={{ width: 150 }}>
        <Button
          title="Show Modal"
          onPress={() => setModalVisiable(!modalVisiable)}
          color={"red"}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 500,
  },
});

export default AppModal;
