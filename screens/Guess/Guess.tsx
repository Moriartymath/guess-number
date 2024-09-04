import { Alert, Text, View } from "react-native";
import GuessTitle from "../../components/GuessTitle";
import CustomButton from "../../components/CustomButton";
import { useEffect, useState } from "react";
import { consecutiveUniqueRandom } from "unique-random";
import Succes from "../../components/Succes";

function generateNumberInRange(
  value: number,
  bound: "lower" | "upper"
): number {
  const random =
    bound === "upper"
      ? consecutiveUniqueRandom(value, 100)
      : consecutiveUniqueRandom(0, value);
  return random();
}

function Guess({ guessNumber }: { guessNumber: number }) {
  const [randValue, setRandValue] = useState<number>(() =>
    consecutiveUniqueRandom(0, 100)()
  );
  const [isLying, setIsLying] = useState({
    value: false,
    bound: "lower",
  });

  function handleClick(bound: "upper" | "lower") {
    if (
      (bound === "upper" && randValue > guessNumber) ||
      (bound === "lower" && randValue < guessNumber)
    ) {
      setIsLying({ value: true, bound });
      return;
    } else setIsLying({ value: false, bound: "" });

    setRandValue(generateNumberInRange(randValue, bound));
  }

  if (isLying.value) alert("You know, it`s wrong");

  if (randValue !== guessNumber) return <Succes />;

  return (
    <View className={"justify-start items-center w-full h-full mt-60"}>
      <GuessTitle classString="" text="Opponent's Guess" />
      <GuessTitle
        text={`${randValue}`}
        classString="border-4 border-orange-500 p-6 w-2/3"
        textClass="text-white text-3xl"
      />
      <View
        className={
          " w-4/5 p-8 justify-center items-center bg-red-950 space-y-10 rounded-lg"
        }
      >
        <Text className={"text-3xl text-orange-200"}>Higher or lower</Text>
        <View className={"flex-row"} style={{ columnGap: 20 }}>
          <CustomButton
            onPress={() => handleClick("lower")}
            title="-"
            classContainer="px-6 rounded-full bg-pink-800"
            disabled={isLying.value && isLying.bound === "lower"}
          />
          <CustomButton
            onPress={() => handleClick("upper")}
            classContainer="px-6 rounded-full bg-pink-800"
            title="+"
            disabled={isLying.value && isLying.bound === "upper"}
          />
        </View>
      </View>
    </View>
  );
}

export default Guess;
