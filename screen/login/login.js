import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./login.styled";

function Login() {
  const {
    Container,
    ContainerText,
    MainText,
    SubText,
    ImageContainer,
    ImageStyle,
    InputContainer,
    Input,
    Label,
    ButtonContainer,
    MainButton,
    ButtonText,
    DontHaveAccount,
  } = styles;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={Container}
    >
      <ScrollView>
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
        <View style={InputContainer}>
          <View>
            <Text style={Label}>Email</Text>
            <TextInput placeholder="Email" style={Input} />
          </View>
        </View>
        <View style={InputContainer}>
          <View>
            <Text style={Label}>Password</Text>
            <TextInput placeholder="Password" secureTextEntry style={Input} />
          </View>
        </View>
        <View style={ButtonContainer}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Login")}
          >
            <View style={MainButton}>
              <Text style={ButtonText}>Sign In</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Text style={DontHaveAccount}>i’dont have account</Text>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Login;
