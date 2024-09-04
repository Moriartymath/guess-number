import { StatusBar, StyleSheet } from "react-native";
import Home from "./screens/home/Home";
import Layout from "./screens/layout/Layout";
import { KeyboardProvider } from "./contexts/KeyboardContext";
import { InputProvider } from "./contexts/InputContext";

export default function App() {
  return (
    <>
      <InputProvider>
        <KeyboardProvider>
          <Layout />
        </KeyboardProvider>
      </InputProvider>
      <StatusBar barStyle={"light-content"} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
