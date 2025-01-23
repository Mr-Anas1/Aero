import { StyleSheet } from "react-native";
import colors from "../../utils/Colors";

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },

  firstContainerOne: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    color: colors.text,
    marginBottom: 30,
  },

  headerName: {
    fontSize: 32,
    fontWeight: "600",
    color: colors.text,
  },

  mainContainer: {
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
    gap: 10,
    borderColor: colors.text,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 18,
  },

  mainContainerHeading: {
    fontSize: 24,
    fontWeight: 600,
    textAlign: "center",
    margin: 10,
  },

  addBtnBg: {
    backgroundColor: colors.white,
    height: 58,
    width: 58,
    borderRadius: 100,
  },

  addBtn: {
    position: "absolute",
    right: 30,
    bottom: 30,
  },
});

export default styles;
