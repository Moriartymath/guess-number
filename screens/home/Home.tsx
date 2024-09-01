import { ImageBackground, Keyboard, Pressable, View } from "react-native";
import GuessTitle from "../../components/GuessTitle";
import GuessView from "../../components/GuessView";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Pressable
      onPress={() => {
        Keyboard.dismiss();
        setIsOpen(false);
      }}
    >
      <LinearGradient
        start={{ x: 1.4, y: 0 }}
        colors={["#ff0061", "#f08617", "#ebbf16"]}
      >
        <ImageBackground
          source={require("../../assets/images/background.png")}
          imageStyle={{ opacity: 0.4 }}
        >
          <View
            className="h-full
          justify-center items-center bg-gradient-to-t from-red-300 to-blue-200"
          >
            <GuessTitle isOpen={isOpen} />
            <GuessView isOpen={isOpen} setIsOpen={setIsOpen} />
          </View>
        </ImageBackground>
      </LinearGradient>
    </Pressable>
  );
}

export default Home;
