import { StyleSheet } from "react-native";
import colors from "../../utils/Colors";

const styles = StyleSheet.create({
  AddProject: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.background,
  },
  AddProjectContainer: {
    alignItems: "center",
    backgroundColor: colors.background,
    borderRadius: 8,
    borderColor: colors.text,
    borderWidth: 1,
    borderStyle: "solid",
    padding: 20,
    width: "90%",
    margin: 40,
  },

  AddProjectTitle: {
    fontSize: 24,
    fontWeight: 600,
    margin: 10,
  },

  AddProjectForm: {
    width: "100%",
  },

  label: {
    fontSize: 18,
    marginBottom: 10,
  },

  input: {
    borderBottomColor: colors.text,
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    padding: 5,
    marginBottom: 20,
  },

  btn: {
    flex: 1,
    padding: 15,
    borderRadius: 5,
    color: colors.white,
    backgroundColor: colors.Yellow,
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  btnText: {
    justifyContent: "center",
    alignItems: "center",
    color: colors.white,
    fontSize: 18,
  },

  durationHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sliderValue: {
    fontWeight: "600",
    marginBottom: 10,
  },

  sliderBar: {
    marginBottom: 20,
  },

  errorInput: {
    borderBottomColor: colors.alert,
  },
});

export default styles;
