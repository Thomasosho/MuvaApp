import { View, Text } from "react-native";
import React from "react";
import Content from "../../components/Content";
import { globalStyles } from "../../constants";

const AboutScreen = () => {
  return (
    <Content>
      <Text style={{ ...globalStyles.font14, textAlign: "justify" }}>
        Muva is your creative friend! We are award-winning mobile app developers
        in Kenya with commitment to your satisfaction. Our team converts ideas
        to apps. We will help you design Android, iOS, SMS or USSD apps as well
        as web portals and a website to help you launch your app. We also handle
        integrations, that is, MPESA, CRB, Maps, Paypal as well as the smile you
        need on Monday morning! We are your go to people for all your website
        design in Nairobi, in Kenya and really, in the world.
      </Text>
    </Content>
  );
};

export default AboutScreen;
