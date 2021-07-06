import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "./login.styled";

function Login() {
  const {
    Container,
    ContainerText,
    MainText,
    SubText,
    ImageContainer,
    ImageStyle,
  } = styles;
  return (
    <ScrollView style={Container}>
      <View style={ContainerText}>
        <Text style={MainText}>Let's sign you in</Text>
        <Text style={SubText}>Welcome back.</Text>
        <Text style={SubText}>Yo’ve been missed</Text>
      </View>
      <View style={ImageContainer}>
        <Image
          source={require("./../../assets/image-login.png")}
          style={ImageStyle}
        />
      </View>
    </ScrollView>
  );
}

export default Login;
