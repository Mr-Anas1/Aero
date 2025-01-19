import { StyleSheet } from "react-native";
import colors from "../../utils/Colors";

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },

  firstContainer: {
    fontFamily: "Poppins-Regular",
    backgroundColor: colors.primary,
    position: "relative",
  },

  firstContainerOne: {
    justifyContent: "space-between",
    flexDirection: "row",
    color: colors.text,
    marginBottom: 30,
  },

  greetingsContainer: {
    justifyContent: "space-between",
    height: 80,
  },

  greetingContainerFirst: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },

  greetingIntro: {
    color: colors.text,
    fontSize: 18,
  },

  greetingName: {
    fontSize: 32,
    fontWeight: "600",
    color: colors.text,
  },

  profile: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 8,
    borderColor: colors.text,
    borderWidth: 1,
    borderStyle: "solid",
  },

  profileImg: {
    width: 60,
    height: 60,
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
