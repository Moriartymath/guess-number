import { Image, View } from "react-native";

function Succes() {
  return (
    <View className={"h-full w-full justify-start items-center mt-60"}>
      <View className={"h-1/4 w-5/6 items-center"}>
        <Image
          source={require("../assets/images/success.png")}
          resizeMode="cover"
          className={"h-full w-3/4  rounded-full"}
        />
      </View>
    </View>
  );
}

export default Succes;
