import { Keyboard, Text, TextInput, View } from "react-native";
import CustomButton from "./CustomButton";

type GuessViewProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function GuessView({ isOpen, setIsOpen }: GuessViewProps) {
  return (
    <View
      className={`flex flex-col w-5/6 p-6 bg-containerBg rounded-xl justify-center items-center space-y-6 ${
        isOpen ? "-translate-y-12" : ""
      }`}
    >
      <Text className={"text-3xl text-orange-200"}>Enter a number</Text>

      <View className={"w-1/3 mb-4"}>
        <TextInput
          keyboardAppearance="dark"
          placeholderTextColor={"orange"}
          className={
            "px-6 py-2 text-center border-b-2 border-yellow-500  text-yellow-500 text-3xl"
          }
          keyboardType="numeric"
          collapsable={true}
          onFocus={() => setIsOpen(true)}
        />
      </View>

      <View
        className={"flex flex-row w-full justify-center"}
        style={{ columnGap: 28 }}
      >
        <CustomButton
          onPress={() => {
            Keyboard.dismiss();
            setIsOpen(false);
          }}
          title="Reset"
          classContainer={"bg-buttonBg rounded-full w-1/3"}
        />
        <CustomButton
          onPress={() => {
            Keyboard.dismiss();
            setIsOpen(false);
          }}
          title="Confirm"
          classContainer={"bg-buttonBg rounded-full w-1/3"}
        />
      </View>
    </View>
  );
}

export default GuessView;
