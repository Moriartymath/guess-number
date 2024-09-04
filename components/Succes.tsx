import { Image, View } from "react-native";

function Succes() {
  return (
    <View className={"h-full w-full justify-start items-center mt-60"}>
      <View className={"h-1/4"}>
        <Image
          source={require("../assets/images/success.png")}
          resizeMode="cover"
          className={"h-full aspect-square rounded-full"}
        />
      </View>
    </View>
  );
}

export default Succes;
