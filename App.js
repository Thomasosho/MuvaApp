import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import IndexNav from "./src/navigation";
import Navigation from "./src/navigation";
import "react-native-gesture-handler";

export default function App() {
  return <IndexNav />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
