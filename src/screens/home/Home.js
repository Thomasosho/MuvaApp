import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../constants";

const HomeScreen = () => {
  return (
    <View style={{ ...globalStyles.bg, padding: 15 }}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
