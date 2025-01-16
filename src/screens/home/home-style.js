import { StyleSheet } from "react-native";
import colors from "../../utils/Colors";

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: colors.background,
  },

  firstContainer: {
    fontFamily: "Poppins-Regular",
    borderEndStartRadius: 24,
    borderBottomRightRadius: 24,
    backgroundColor: colors.primary,
    padding: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    color: colors.text,
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
});

export default styles;
