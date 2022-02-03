import { Image, ImageBackground, Text, View } from "react-native";

import img from "../assets/tiny_logo.png";

export default () => {
  return (
    <>
      <ImageBackground
        source={{ uri: "https://reactjs.org/logo-og.png" }}
        resizeMode="cover"
        style={{ width: 500, height: 500 }}
      >
        <Image
          // source={require("../assets/tiny_logo.png")}
          source={{
            uri: img != null && img,
          }}
          style={{ width: 100, height: 100 }}
          accessibilityLabel="Image"
          fadeDuration={500}
        />
      </ImageBackground>
    </>
  );
};
