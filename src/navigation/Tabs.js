import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home/Home";
import Planner from "../screens/planner/Planner";
import Settings from "../screens/settings/Settings";
import Stats from "../screens/stats/Stats";
import Timer from "../screens/timer/Timer";
import { View } from "react-native-web";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text } from "react-native-web";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#f8f9fa",
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="Timer"
        component={Timer}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 20,
                gap: 2,
              }}
            >
              <MaterialCommunityIcons
                name="timer-sand"
                size={24}
                color={focused ? "red" : "black"}
              />
              <Text style={{ color: focused ? "red" : "black" }}>Timer</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Planner"
        component={Planner}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 20,
                gap: 2,
              }}
            >
              <Fontisto
                name="date"
                size={24}
                color={focused ? "red" : "black"}
              />
              <Text style={{ color: focused ? "red" : "black" }}>Schedule</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 20,
                gap: 2,
              }}
            >
              <AntDesign
                name="home"
                size={24}
                color={focused ? "red" : "black"}
              />
              <Text style={{ color: focused ? "red" : "black" }}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Stats"
        component={Stats}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 20,
                gap: 2,
              }}
            >
              <Ionicons
                name="stats-chart-outline"
                size={24}
                color={focused ? "red" : "black"}
              />
              <Text style={{ color: focused ? "red" : "black" }}>Stats</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 20,
                gap: 2,
              }}
            >
              <Ionicons
                name="settings-outline"
                size={24}
                color={focused ? "red" : "black"}
              />
              <Text style={{ color: focused ? "red" : "black" }}>Settings</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
