import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../constants";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import routes from "../../navigation/routes";
import Content from "../../components/Content";

const HomeScreen = ({ navigation }) => {
  //   const nav = useNavigation();
  return (
    <Content>
      <Text style={{ ...globalStyles.fontBold16, textAlign: "center" }}>
        We are Muva
      </Text>
      <View style={globalStyles.spacer1} />
      <Text style={{ ...globalStyles.font14, textAlign: "center" }}>
        We design and develop custom mobile solutions (apps) and websites
      </Text>
      <View style={globalStyles.spacer2} />
      <Button
        text="What We Do"
        onPress={() => {
          nav.navigate(routes.WHATWEDO);
        }}
      />
      <View style={globalStyles.spacer2} />
      <Button
        text="Our Company"
        onPress={() => {
          navigation.navigate(routes.OURCOMPANY);
        }}
      />
    </Content>
  );
};

export default HomeScreen;
