/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { colors } from "../constants";
import MainNavigator from "./Main";

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
          drawerActiveBackgroundColor: colors.white,
          drawerActiveTintColor: colors.black,
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNav;
