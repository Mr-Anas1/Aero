import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./Tag-style";
import colors from "../../utils/Colors";

const Tag = ({ bgColor, textColor, content }) => {
  return (
    <View>
      <View style={[styles.tagContainer, { backgroundColor: bgColor }]}>
        <Text style={[styles.tagText, { color: textColor }]}>{content}</Text>
      </View>
    </View>
  );
};

export default Tag;
