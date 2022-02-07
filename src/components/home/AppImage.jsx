import { Image, ImageBackground, Text, View } from "react-native";

import img from "../../assets/tiny_logo.png";

export default () => {
  return (
    <>
      <ImageBackground
        source={{
          uri: "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        }}
        // source={require("../assets/tiny_logo.png")}
        resizeMode="cover"
        style={{ width: 500, height: 250 }}
      >
        <Text
          style={{
            fontSize: 30,
            backgroundColor: "coral",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Hello text
        </Text>
        <Image
          source={require("../../assets/tiny_logo.png")}
          // source={{
          //   uri: "https://reactnative.dev/img/tiny_logo.png",
          // }}
          style={{ width: 100, height: 100 }}
        />
      </ImageBackground>
    </>
  );
};
