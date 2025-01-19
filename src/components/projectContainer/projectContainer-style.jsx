import { StyleSheet } from "react-native";
import colors from "../../utils/Colors";

const styles = StyleSheet.create({
  projectContainer: {
    width: "100%",
    borderColor: colors.text,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 18,
    backgroundColor: colors.background,
    justifyContent: "center",
    gap: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    boxSizing: "borderBox",
    marginBottom: 10,
  },

  projectName: {
    fontSize: 22,
    fontWeight: 600,
    color: colors.text,
    marginBottom: 2,
  },

  projectDescription: {
    color: colors.gray,
  },

  projectTags: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
  },
});

export default styles;
