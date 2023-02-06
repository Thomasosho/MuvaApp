import { View, Text } from "react-native";
import React from "react";
import Content from "../../components/Content";
import { globalStyles } from "../../constants";

const WhatWeDoScreen = () => {
  return (
    <Content>
      <Text style={{ ...globalStyles.font14, textAlign: "justify" }}>
        We buckle down to remain the best mobile apps development company in
        Kenya and beyond. You said you like details? Click any link below:
      </Text>
    </Content>
  );
};

export default WhatWeDoScreen;
