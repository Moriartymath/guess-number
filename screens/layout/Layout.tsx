import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { ImageBackground, Keyboard, Pressable, View } from "react-native";
import { useKeyboard } from "../../contexts/KeyboardContext";
import Home from "../home/Home";
import Guess from "../Guess/Guess";

function Layout() {
  const { setIsOpen } = useKeyboard();
  const [guessNumber, setGuessNumber] = useState(null);
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
            {guessNumber ? (
              <Guess guessNumber={guessNumber} />
            ) : (
              <Home setGuessNumber={setGuessNumber} />
            )}
          </View>
        </ImageBackground>
      </LinearGradient>
    </Pressable>
  );
}

export default Layout;
