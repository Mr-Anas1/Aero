import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import homeStyle from "./home-style";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native";
import colors from "../../utils/Colors";
import ProjectContainer from "../../components/projectContainer/ProjectContainer";
import { ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";
import AddProject from "../../components/AddProject/AddProject";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={homeStyle.home}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={homeStyle.firstContainer}
      >
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
          <ProjectContainer
            projectName={"Project Me"}
            projectDescription={"This is a sample project."}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate("AddProject")}
        style={homeStyle.addBtn}
      >
        <View style={homeStyle.addBtnBg}>
          <AntDesign name="pluscircle" size={58} color={colors.Yellow} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
