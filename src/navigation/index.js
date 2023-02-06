import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext, useEffect, useState } from "react";
import HomeScreen from "../screens/home/Home";
import DrawerNav from "./Drawer";
import routes from "./routes";

const Stack = createStackNavigator();

const IndexNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.DRAWER} component={DrawerNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default IndexNav;
