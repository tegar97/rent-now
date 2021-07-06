import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./get-started.styled";

const image = { uri: "/assets/bg-started.png" };

function GetStarted({ navigation }) {
  const {
    container,
    ContainerText,
    MainText,
    SubText,
    MainButton,
    ButtonText,
  } = styles;
  return (
    <ImageBackground
      source={require("./../../assets/bg-started.png")}
      style={container}
    >
      <View style={ContainerText}>
        <Text style={MainText}>Search Your Dream House</Text>
        <Text style={SubText}>
          Find Your perfect & sweet home with just a few click
        </Text>

        <TouchableWithoutFeedback
          underlayColor="white"
          onPress={() => navigation.navigate("Login")}
        >
          <View style={MainButton}>
            <Text style={ButtonText}>Explore</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </ImageBackground>
  );
}

export default GetStarted;
