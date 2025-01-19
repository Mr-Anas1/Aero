import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { React, useState } from "react";
import styles from "./AddProject-style";
import colors from "../../utils/Colors";
import Slider from "@react-native-community/slider";

const AddProject = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [interval, setInterval] = useState("");

  const handleSubmit = () => {
    console.log({ name, description, duration, interval });
  };

  return (
    <SafeAreaView style={styles.AddProject}>
      <View style={styles.AddProjectContainer}>
        <Text style={styles.AddProjectTitle}>Plan</Text>
        <View style={styles.AddProjectForm}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
          />

          <View style={styles.durationHeading}>
            <Text style={styles.label}>Duration</Text>
            <Text style={styles.sliderValue}>{`${duration} hr/day`}</Text>
          </View>

          <Slider
            value={duration}
            onValueChange={setDuration}
            minimumValue={0}
            maximumValue={24}
            step={1}
            thumbTintColor={colors.Yellow}
            minimumTrackTintColor={colors.Yellow}
            maximumTrackTintColor="#ccc"
            style={styles.sliderBar}
          />

          <TouchableOpacity onPress={handleSubmit}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddProject;
