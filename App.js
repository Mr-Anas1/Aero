import { StatusBar } from "expo-status-bar";
import Tabs from "./src/navigation/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, View } from "react-native";
import AppWrapper from "./src/utils/AppWrapper";

export default function App() {
  return (
    <AppWrapper>
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </SafeAreaView>
    </AppWrapper>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
