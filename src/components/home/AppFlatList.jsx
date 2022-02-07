import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  FlatList,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }) => (
  <Text style={{ backgroundColor: "blue", padding: 10, marginVertical: 5 }}>
    {title}
  </Text>
);

export default () => {
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <SafeAreaView style={{ paddingHorizontal: 20 }}>
      <Text style={{ backgroundColor: "coral", color: "#fff", padding: 10 }}>
        Flat List
      </Text>
      <FlatList
        style={{ marginVertical: 10 }}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
