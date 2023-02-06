/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { colors } from "../constants";
import MainNavigator from "./Main";
import { EvilIcons, Ionicons, Octicons } from "@expo/vector-icons";
import SettingsScreen from "../screens/settings/Settings";
import HistoryScreen from "../screens/history/History";
import LocationScreen from "../screens/location/Location";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      //   drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      {/* <Drawer */}
      <Drawer.Screen
        name="Home"
        component={MainNavigator}
        options={{
          title: "Home",
          headerShown: false,
          headerTitle: "MuvaApp",
          headerTitleStyle: { color: colors.black },
          headerTintColor: colors.primary,
          drawerActiveBackgroundColor: colors.white,
          drawerActiveTintColor: colors.primary,
          drawerIcon: ({ focused }) => (
            <Octicons
              name="home"
              size={24}
              color={focused ? colors.primary : colors.black}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          headerShown: true,
          headerTitleStyle: { color: colors.black },
          headerTintColor: colors.primary,
          drawerActiveBackgroundColor: colors.white,
          drawerActiveTintColor: colors.primary,
          drawerIcon: ({ focused }) => (
            <Ionicons
              name="settings-outline"
              size={24}
              color={focused ? colors.primary : colors.black}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="History"
        component={HistoryScreen}
        options={{
          title: "History",
          headerShown: true,
          headerTitleStyle: { color: colors.black },
          headerTintColor: colors.primary,
          drawerActiveBackgroundColor: colors.white,
          drawerActiveTintColor: colors.primary,
          drawerIcon: ({ focused }) => (
            <Octicons
              name="history"
              size={24}
              color={focused ? colors.primary : colors.black}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Location"
        component={LocationScreen}
        options={{
          title: "Location",
          headerShown: true,
          headerTitleStyle: { color: colors.black },
          headerTintColor: colors.primary,
          drawerActiveBackgroundColor: colors.white,
          drawerActiveTintColor: colors.primary,
          drawerIcon: ({ focused }) => (
            <EvilIcons
              name="location"
              size={24}
              color={focused ? colors.primary : colors.black}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNav;
