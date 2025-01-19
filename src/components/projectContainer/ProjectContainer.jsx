import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./projectContainer-style";
import Tag from "../Tag/Tag";
import colors from "../../utils/Colors";

const ProjectContainer = ({ projectName, projectDescription }) => {
  return (
    <View style={styles.projectContainer}>
      <View>
        <Text style={styles.projectName}>{projectName}</Text>
        <Text style={styles.projectDescription}>{projectDescription}</Text>
      </View>

      <View style={styles.projectTags}>
        <Tag
          bgColor={colors.lightYellow}
          textColor={colors.yellowBgText}
          content={"5hr / day"}
        />

        <Tag
          bgColor={colors.lightBlue}
          textColor={colors.blueBgText}
          content={"30hr Worked"}
        />
        <Tag
          bgColor={colors.lightGreen}
          textColor={colors.greenBgText}
          content={"12 Sessions"}
        />
      </View>
    </View>
  );
};

export default ProjectContainer;
