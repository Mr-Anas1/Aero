import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useContext } from "react"; // Corrected import
import styles from "./AddProject-style";
import colors from "../../utils/Colors";
import Slider from "@react-native-community/slider";
import { ProjectContext } from "../../utils/ProjectContext";

const AddProject = ({ navigation }) => {
  const { addProject } = useContext(ProjectContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(1);
  const [errors, setErrors] = useState({});

  // Validation function
  const validateFields = (field = null) => {
    const newErrors = {};
    if ((!field || field === "name") && !name.trim())
      newErrors.name = "Name is required";
    if ((!field || field === "description") && !description.trim())
      newErrors.description = "Description is required";
    return newErrors;
  };

  // Submit handler
  const handleSubmit = () => {
    const newErrors = validateFields();
    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => !error)) {
      const newProject = { name, description, duration };
      addProject(newProject); // Update context and AsyncStorage
      console.log("New Project Added:", newProject);

      // Reset form fields and navigate back
      setName("");
      setDescription("");
      setDuration(1);
      setErrors({});
      navigation.goBack();
    }
  };

  const renderError = (field) => {
    return errors[field] ? (
      <Text style={styles.errorText}>{errors[field]}</Text>
    ) : null;
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
            onBlur={() =>
              setErrors((prevErrors) => ({
                ...prevErrors,
                ...validateFields("name"),
              }))
            }
          />
          {renderError("name")}

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[
              styles.input,
              errors.description ? styles.errorInput : null,
            ]}
            value={description}
            onChangeText={setDescription}
            onBlur={() =>
              setErrors((prevErrors) => ({
                ...prevErrors,
                ...validateFields("description"),
              }))
            }
          />
          {renderError("description")}

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

          <TouchableOpacity onPress={handleSubmit} activeOpacity={0.8}>
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
