import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  ContainerText: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    height: "100%",
    paddingVertical: 70,
  },
  MainText: {
    color: "#5C9CFB",
    fontSize: 25,
    marginBottom: 10,
    fontFamily: "Gilroy-ExtraBold",
  },
  SubText: {
    color: "#ffff",
    fontSize: 15,
    marginBottom: 10,

    textAlign: "center",
    width: "68%",
    fontFamily: "Gilroy-ExtraBold",
  },
  MainButton: {
    backgroundColor: "#5C9CFB",
    color: "#ffff",
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingVertical: 15,
    marginTop: 20,
  },
  ButtonText: {
    color: "#ffff",
    fontFamily: "Gilroy-ExtraBold",
    fontSize: 16,
  },
});
