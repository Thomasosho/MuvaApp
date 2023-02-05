/* eslint-disable react-native/no-inline-styles */

import * as React from "react";

import { StyleSheet } from "react-native";

import { colors } from "../constants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo, Feather, Ionicons, Octicons } from "@expo/vector-icons";
import HomeScreen from "../screens/home/Home";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeInit"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Homeflow"
      screenOptions={{ headerShown: true, tabBarActiveTintColor: colors.blue }}
    >
      <Tab.Screen
        name="HomeFlow"
        component={HomeNavigator}
        options={{
          tabBarIcon: (tabInfo) => (
            <Octicons name="home" size={24} color="black" />
          ),
          title: "Home",
        }}
      />
      <Tab.Screen
        name="Contact"
        component={HomeNavigator}
        options={{
          tabBarIcon: (tabInfo) => (
            <Feather name="phone" size={24} color="black" />
          ),
          title: "Contact",
        }}
      />
      <Tab.Screen
        name="About"
        component={HomeNavigator}
        options={{
          tabBarIcon: (tabInfo) => (
            <Entypo name="info" size={24} color="black" />
          ),
          title: "About",
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "red",
  },
  contentContainer: {
    flex: 1,
    paddingLeft: 50,
  },
  bottomSheetTitle: {
    fontSize: 24,
    fontWeight: "500",
  },
});
