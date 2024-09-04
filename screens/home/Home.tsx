import { View } from "react-native";
import GuessTitle from "../../components/GuessTitle";
import GuessView from "../../components/GuessView";

function Home({ setGuessNumber }: { setGuessNumber: Function }) {
  return (
    <View
      className="h-full
          justify-center items-center bg-gradient-to-t from-red-300 to-blue-200"
    >
      <GuessTitle text="Guess my number" />
      <GuessView setGuessNumber={setGuessNumber} />
    </View>
  );
}

export default Home;
