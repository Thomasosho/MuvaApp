import { View, Text } from "react-native";
import React from "react";
import Content from "../../components/Content";
import { colors, globalStyles } from "../../constants";
import Button from "../../components/Button";

const WhatWeDoScreen = ({ navigation }) => {
  return (
    <Content>
      <Text style={{ ...globalStyles.font14, textAlign: "justify" }}>
        We buckle down to remain the best mobile apps development company in
        Kenya and beyond. You said you like details? Click any link below:
      </Text>
      <View style={globalStyles.spacer2} />
      <Button
        color={colors.black}
        text="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </Content>
  );
};

export default WhatWeDoScreen;
