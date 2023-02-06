import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, sizes } from "../constants";

const Content = ({ children, style }) => {
  return <View style={[styles.content, style]}>{children}</View>;
};

export default Content;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: sizes.medium,
    paddingVertical: sizes.medium,
    // paddingTop: sizes.big,
  },
});
