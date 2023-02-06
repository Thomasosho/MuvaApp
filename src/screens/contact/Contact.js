import { View, Text } from "react-native";
import React from "react";
import Input from "../../components/Input";
import Content from "../../components/Content";
import Button from "../../components/Button";

const ContactScreen = () => {
  return (
    <Content>
      <Input label="Email Address" placeHolder="Your Email Address" />
      <Input label="Message" placeHolder="Your message" multiLines={true} />
      <Button text="Send" />
    </Content>
  );
};

export default ContactScreen;
