/* eslint-disable react-native/no-inline-styles */

import * as React from "react";

import { StyleSheet } from "react-native";

import { colors } from "../constants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo, Feather, Ionicons, Octicons } from "@expo/vector-icons";
import HomeScreen from "../screens/home/Home";
import routes from "./routes";
import ContactScreen from "../screens/contact/Contact";
import AboutScreen from "../screens/about/About";
import OurCompanyScreen from "../screens/our-company/OurCompany";
import WhatWeDoScreen from "../screens/what-we-do/WhatWeDo";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName={routes.HOMENAV}
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen
        name={routes.HOME}
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitle: "MuvaApp",
          headerLeft: () => (
            <Ionicons
              onPress={() => {
                navigation.openDrawer();
              }}
              style={{ marginHorizontal: 10 }}
              name="menu"
              size={30}
            />
          ),
        }}
      />
      <Stack.Screen
        name={routes.OURCOMPANY}
        component={OurCompanyScreen}
        options={{ headerTitle: "Our Company", headerBackTitle: "" }}
      />
      <Stack.Screen
        name={routes.WHATWEDO}
        component={WhatWeDoScreen}
        options={{ headerTitle: "What We Do", headerBackTitle: "" }}
      />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.blue }}
    >
      <Tab.Screen
        name={routes.HOMEFLOW}
        component={HomeNavigator}
        options={{
          headerTitle: "Welcome",
          tabBarIcon: (tabInfo) => (
            <Octicons
              name="home"
              size={24}
              color={tabInfo.focused ? colors.primary : colors.black}
            />
          ),
          title: "Home",
        }}
      />
      <Tab.Screen
        name={routes.CONTACT}
        component={ContactScreen}
        options={{
          headerShown: true,
          headerTitle: "Contact Us",
          headerLeft: () => (
            <Ionicons
              onPress={() => {
                navigation.openDrawer();
              }}
              style={{ marginHorizontal: 10 }}
              name="menu"
              size={30}
            />
          ),
          tabBarIcon: (tabInfo) => (
            <Feather
              name="phone"
              size={24}
              color={tabInfo.focused ? colors.primary : colors.black}
            />
          ),
          title: "Contact",
        }}
      />
      <Tab.Screen
        name={routes.ABOUT}
        component={AboutScreen}
        options={{
          headerShown: true,
          headerTitle: "About Us",
          headerLeft: () => (
            <Ionicons
              onPress={() => {
                navigation.openDrawer();
              }}
              style={{ marginHorizontal: 10 }}
              name="menu"
              size={30}
            />
          ),
          tabBarIcon: (tabInfo) => (
            <Entypo
              name="info"
              size={24}
              color={tabInfo.focused ? colors.primary : colors.black}
            />
          ),
          title: "About",
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
