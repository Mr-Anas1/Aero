import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "../screens/home/Home";
import Planner from "../screens/planner/Planner";
import Settings from "../screens/settings/Settings";
import Stats from "../screens/stats/Stats";
import Timer from "../screens/timer/Timer";
import AddProject from "../components/AddProject/AddProject";
import colors from "../utils/Colors";
import { ProjectProvider } from "../utils/ProjectContext";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Tab Navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#f8f9fa",
          height: 80,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Timer"
        component={Timer}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.navigationLink}>
              <MaterialCommunityIcons
                name="timer-sand"
                size={24}
                color={focused ? "red" : "black"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Planner"
        component={Planner}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.navigationLink}>
              <Fontisto
                name="date"
                size={24}
                color={focused ? "red" : "black"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.navigationLink}>
              <AntDesign
                name="home"
                size={24}
                color={focused ? "red" : "black"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Stats"
        component={Stats}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.navigationLink}>
              <Ionicons
                name="stats-chart-outline"
                size={24}
                color={focused ? "red" : "black"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.navigationLink}>
              <Ionicons
                name="settings-outline"
                size={24}
                color={focused ? "red" : "black"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Stack Navigator with AddProject Screen
const Tabs = () => {
  return (
    <ProjectProvider>
      {" "}
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddProject"
          component={AddProject}
          options={{ title: "Add New Plan" }}
        />
      </Stack.Navigator>
    </ProjectProvider>
  );
};

const styles = StyleSheet.create({
  navigationLink: {
    alignItems: "center",
    justifyContent: "center",
    top: 20,
    gap: 2,
    color: colors.text,
  },
});

export default Tabs;
