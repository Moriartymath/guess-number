import { Keyboard, Text, TextInput, View } from "react-native";
import CustomButton from "./CustomButton";
import { useKeyboard } from "../contexts/KeyboardContext";
import { useInput } from "../contexts/InputContext";

function GuessView({ setGuessNumber }: { setGuessNumber: Function }) {
  const { isOpen, setIsOpen } = useKeyboard();
  const { input, setInput } = useInput();
  return (
    <View
      className={`flex flex-col w-6/7 p-8 bg-containerBg rounded-xl justify-center items-center space-y-6 ${
        isOpen ? "-translate-y-12" : ""
      }`}
    >
      <Text className={"text-3xl text-orange-200"}>Enter a number</Text>

      <View className={"w-1/3 mb-4"}>
        <TextInput
          keyboardAppearance="dark"
          placeholderTextColor={"orange"}
          value={input}
          className={
            "px-6 py-2 text-center border-b-2 border-yellow-500  text-yellow-500 text-3xl"
          }
          onChangeText={(text) => setInput(text)}
          keyboardType="numeric"
          collapsable={true}
          onFocus={() => setIsOpen(true)}
        />
      </View>

      <View
        className={"flex flex-row justify-center items-center"}
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
            setGuessNumber(+input);
          }}
          title="Confirm"
          classContainer={"bg-buttonBg rounded-full w-1/3"}
        />
      </View>
    </View>
  );
}

export default GuessView;
