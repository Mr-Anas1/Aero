import React from "react";
import { StyleSheet } from "react-native";
import colors from "./Colors";
import { View } from "react-native";

const AppWrapper = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
});

export default AppWrapper;
