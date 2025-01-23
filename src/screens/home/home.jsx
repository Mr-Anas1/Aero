import React, { useContext } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import colors from "../../utils/Colors";
import homeStyle from "./home-style";
import { ProjectContext } from "../../utils/ProjectContext";
import ProjectContainer from "../../components/projectContainer/ProjectContainer";
import Ionicons from "@expo/vector-icons/Ionicons";

const Home = () => {
  const navigation = useNavigation();
  const { projects } = useContext(ProjectContext); // Use context to get projects

  return (
    <SafeAreaView style={homeStyle.home}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={homeStyle.firstContainer}
      >
        {/* Greetings Section */}
        <View style={homeStyle.firstContainerOne}>
          <View style={homeStyle.header}>
            <Text style={homeStyle.headerName}>Aero</Text>
          </View>
          <View style={homeStyle.settings}>
            <TouchableOpacity>
              <Ionicons name="settings-sharp" size={26} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Projects Section */}
        <View style={homeStyle.mainContainer}>
          <Text style={homeStyle.mainContainerHeading}>My Plans</Text>
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <ProjectContainer
                projectName={project.name}
                projectDescription={project.description}
              />
            ))
          ) : (
            <Text style={homeStyle.noProjectsText}>
              No plans added yet. Click the button below to add one!
            </Text>
          )}
        </View>
      </ScrollView>

      {/* Add Project Button */}
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
