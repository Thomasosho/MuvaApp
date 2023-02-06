/* eslint-disable react-native/no-inline-styles */

import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { colors, device, globalStyles, sizes } from "../constants/index";

import React from "react";

const CustomButtonOutline = ({
  text,
  onPress,
  showSpinner,
  color,
  width,
  textColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderColor: color ?? colors.primary,
        borderWidth: 1,
        padding: 15,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        width: width ?? "100%",
      }}
    >
      {showSpinner ? (
        <ActivityIndicator color={textColor ?? colors.white} />
      ) : (
        <Text
          style={{
            ...globalStyles.fontBold14,
            color: textColor ?? colors.white,
            fontSize: sizes.medium,
          }}
        >
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButtonOutline;
