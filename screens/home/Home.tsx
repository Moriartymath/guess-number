import { useState } from "react";
import { View } from "react-native";
import GuessTitle from "../../components/GuessTitle";
import GuessView from "../../components/GuessView";

function Home() {
  return (
    <View
      className="flex flex-col h-full
    justify-center items-center bg-orange-300 space-y-24"
    >
      <GuessTitle />
      <GuessView />
    </View>
  );
}

export default Home;
