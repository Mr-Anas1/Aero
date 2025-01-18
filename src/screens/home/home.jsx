import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import homeStyle from "./home-style";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native";
import colors from "../../utils/Colors";
import ProjectContainer from "../../components/projectContainer/ProjectContainer";

const Home = () => {
  return (
    <SafeAreaView style={homeStyle.home}>
      <View style={homeStyle.firstContainer}>
        <View style={homeStyle.firstContainerOne}>
          <View style={homeStyle.greetings}>
            <View style={homeStyle.greetingsContainer}>
              <View style={homeStyle.greetingContainerFirst}>
                <Text style={homeStyle.greetingIntro}>Hey</Text>
                <Text>
                  <MaterialIcons
                    name="waving-hand"
                    size={24}
                    color={colors.text}
                  />
                </Text>
              </View>
              <Text style={homeStyle.greetingName}>Mohamed Anas</Text>
            </View>
          </View>

          <View>
            <View style={homeStyle.profile}>
              <Image
                source={require("../../../assets/images/profile.png")}
                style={homeStyle.profileImg}
              />
            </View>
          </View>
        </View>

        <View style={homeStyle.mainContainer}>
          <Text style={homeStyle.mainContainerHeading}>My Plans</Text>
          <ProjectContainer />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
