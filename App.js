import { StatusBar } from "expo-status-bar";
import Tabs from "./src/navigation/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, View } from "react-native";
import AppWrapper from "./src/utils/AppWrapper";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <AppWrapper>
      <SafeAreaProvider style={styles.safeArea}>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </SafeAreaProvider>
    </AppWrapper>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
