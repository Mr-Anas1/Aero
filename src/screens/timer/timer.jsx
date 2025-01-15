import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../utils/Colors";

const Timer = () => {
  return (
    <View style={styles.container}>
      <Text>timer</Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
});
