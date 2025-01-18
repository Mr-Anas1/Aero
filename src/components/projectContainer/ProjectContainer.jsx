import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./projectContainer-style";

const ProjectContainer = () => {
  return (
    <View style={styles.firstContainerTwo}>
      <View>
        <Text style={styles.projectName}>Project Me</Text>
        <Text style={styles.secondaryText}>
          This is a sample project about me
        </Text>
        <Text style={styles.time}>5 hr</Text>
      </View>

      <View>
        <Text>99%</Text>
      </View>
    </View>
  );
};

export default ProjectContainer;
