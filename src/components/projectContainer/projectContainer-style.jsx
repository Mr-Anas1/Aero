import { StyleSheet } from "react-native";
import colors from "../../utils/Colors";

const styles = StyleSheet.create({
  firstContainerTwo: {
    width: "100%",
    height: 120,
    borderColor: colors.text,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 18,
    backgroundColor: colors.background,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
  },

  projectName: {
    fontSize: 26,
    fontWeight: 600,
    color: colors.text,
  },

  time: {
    fontWeight: 600,
    color: colors.text,
  },
});

export default styles;
