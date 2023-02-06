import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors, device, globalStyles } from "../constants";

import React from "react";

const Input = ({
  onChange,
  label,
  placeHolder,
  value,
  enabled,
  multiLines,
  height,
  width,
  maxLength,
  inputType,
  autoCapitalize,
}) => {
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <View style={globalStyles.spacer1} />
      <View style={{ ...styles.inputContainer, height: height }}>
        <TextInput
          onChangeText={onChange}
          placeholder={placeHolder}
          placeholderTextColor={colors.black20}
          style={{
            ...globalStyles.textInput,
            width: width ?? "80%",
          }}
          value={value}
          autoCapitalize={autoCapitalize ?? "none"}
          secureTextEntry={false}
          autoCorrect={false}
          keyboardType={inputType ?? "default"}
          multiline={multiLines ?? false}
          editable={enabled ?? true}
          maxLength={maxLength}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.black20,
    borderRadius: 10,
    padding: device.ios ? 10 : 5,
    borderWidth: 1,
    marginBottom: 15,
  },
  text: { fontSize: 15, fontWeight: "600", color: colors.black },
});
