import { Text, View } from "react-native";
import { useKeyboard } from "../contexts/KeyboardContext";

function GuessTitle({
  text,
  classString,
  textClass,
}: {
  text: string;
  classString?: string;
  textClass?: string;
}) {
  const { isOpen } = useKeyboard();

  return (
    <View
      className={`flex w-5/6 p-6 border-white border-4 space-y-12 mb-10 ${classString}  ${
        isOpen ? "-translate-y-12" : ""
      }`}
    >
      <Text
        className={`text-2xl text-white text-center capitalize font-bold  ${textClass}`}
      >
        {text}
      </Text>
    </View>
  );
}

export default GuessTitle;
