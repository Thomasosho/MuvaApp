import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext, useEffect, useState } from "react";
import HomeScreen from "../screens/home/Home";
import DrawerNav from "./Drawer";

const Stack = createStackNavigator();

const IndexNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeDrawer" component={DrawerNav} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default IndexNav;
