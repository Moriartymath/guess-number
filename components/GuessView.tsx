import { Text, TextInput, View } from "react-native";
import CustomButton from "./CustomButton";

function GuessView() {
  return (
    <View
      className={
        "flex flex-col w-5/6 p-6 bg-red-900 rounded-xl justify-center items-center space-y-6"
      }
    >
      <Text className={"text-xl text-orange-100"}>Enter a number</Text>
      <View className={"w-1/3"}>
        <TextInput
          placeholderTextColor={"orange"}
          className={
            "px-6 py-2 text-center border-b-2 border-b-orange-400 text-indigo-200 text-3xl"
          }
        />
      </View>
      <View className={"flex flex-row"}>
        <CustomButton
          title="Reset"
          className="bg-pink-400 rounded-full w-1/3"
        />
        <CustomButton
          title="Confirm"
          className="bg-pink-400 rounded-full w-1/3"
        />
      </View>
    </View>
  );
}

export default GuessView;
