import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Home from "./screens/home/Home";

export default function App() {
  return <Home />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
