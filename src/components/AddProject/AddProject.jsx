import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { React, useState, useContext } from "react"; // Import useContext
import styles from "./AddProject-style";
import colors from "../../utils/Colors";
import Slider from "@react-native-community/slider";
import { ProjectContext } from "../../utils/ProjectContext";

const AddProject = ({ navigation }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    description: "",
  });

  const { addProject } = useContext(ProjectContext); // Access addProject from context

  // Validation function on blur
  const handleBlur = (field, value) => {
    const newErrors = { ...errors };
    if (!value.trim()) {
      newErrors[field] = "This field is required";
    } else {
      newErrors[field] = "";
    }

    setErrors(newErrors);
  };

  // Submit handler
  const handleSubmit = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!description.trim()) {
      newErrors.description = "Description is required";
    }

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => !error)) {
      const newProject = { name, description, duration };
      addProject(newProject); // Dynamically call addProject function
      console.log("New Project:", newProject);
      setName("");
      setDescription("");
      setDuration("");
      setErrors({});
      navigation.goBack(); // Navigate back to TabNavigator
    }
  };

  return (
    <SafeAreaView style={styles.AddProject}>
      <View style={styles.AddProjectContainer}>
        <Text style={styles.AddProjectTitle}>Plan</Text>
        <View style={styles.AddProjectForm}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={[styles.input, errors.name ? styles.errorInput : null]}
            value={name}
            onChangeText={setName}
            onBlur={() => handleBlur("name", name)}
          />

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[
              styles.input,
              errors.description ? styles.errorInput : null,
            ]}
            value={description}
            onChangeText={setDescription}
            onBlur={() => handleBlur("description", description)}
          />

          <View style={styles.durationHeading}>
            <Text style={styles.label}>Duration</Text>
            <Text style={styles.sliderValue}>{`${duration} hr/day`}</Text>
          </View>

          <Slider
            value={duration}
            onValueChange={setDuration}
            minimumValue={1}
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
