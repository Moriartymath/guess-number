import { Text, View } from "react-native";

type GuessTitleProps = {
  isOpen: boolean;
};

function GuessTitle({ isOpen }: GuessTitleProps) {
  return (
    <View
      className={`flex w-2/3 p-8 border-white border-4 space-y-12 mb-10 ${
        isOpen ? "-translate-y-12" : ""
      }`}
    >
      <Text className={"text-2xl text-white text-center capitalize font-bold"}>
        Guess my number
      </Text>
    </View>
  );
}

export default GuessTitle;
