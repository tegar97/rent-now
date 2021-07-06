import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 20,
  },
  ContainerText: {
    flex: 1,
    flexDirection: "column",
    marginTop: 50,
  },
  MainText: {
    color: "#5C9CFB",
    fontSize: 29,
    marginBottom: 10,
    fontFamily: "Gilroy-ExtraBold",
  },
  SubText: {
    color: "#5C9CFB",
    fontSize: 25,
    fontFamily: "Gilroy-Light",
  },
  ImageContainer: {
    marginTop: 5,
    width: "100%",
  },
  ImageStyle: {
    width: 350,
    height: 350,
  },
  InputContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  Input: {
    borderWidth: 2,
    borderColor: "#5C9CFB",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  Label: {
    color: "#5C9CFB",
    fontSize: 16,
    marginBottom: 10,
    fontFamily: "Gilroy-ExtraBold",
  },
  ButtonContainer: {
    marginTop: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  MainButton: {
    backgroundColor: "#5C9CFB",
    color: "#ffff",
    borderRadius: 40,
    width: "90%",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    color: "#ffff",
    fontSize: 20,
  },
  DontHaveAccount: {
    color: "#8D8D8D",
    fontSize: 20,
    marginTop: 10,
  },
});
