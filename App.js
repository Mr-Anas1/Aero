import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Tabs from "./src/navigation/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
