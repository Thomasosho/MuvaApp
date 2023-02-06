import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { colors, device, globalStyles, sizes } from "../constants/index";

import React from "react";

const Button = ({ text, onPress, showSpinner, color, width }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: color ?? colors.primary,
        padding: 15,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        width: width ?? "100%",
      }}
    >
      {showSpinner ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <Text style={{ color: colors.white, fontSize: sizes.medium }}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
  },
});
