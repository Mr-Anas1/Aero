import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "./Colors";
import { View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import { StatusBar } from "react-native";

const AppWrapper = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "Poppins-Regular": require("../../assets/fonts/Poppins-Black.ttf"),
      "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
      "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf"),
    });
  };

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => {
          console.log(err);
        }}
      />
    );
  }
  return (
    <>
      <StatusBar backgroundColor="rgba(0, 0, 0, 0.7)" barStyle="dark-content" />
      <View style={styles.container}>{children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    fontFamily: "Poppins-Regular",
  },
});

export default AppWrapper;
