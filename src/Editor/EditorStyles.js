import { StyleSheet } from "react-native";

const editorMinHeight = 36

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
    borderColor: "green",
    borderWidth: 1,
    width: 300
  },
  input: {
    fontSize: 16,
    color: "#000",
    fontWeight: "400",
    paddingHorizontal: 20,
    minHeight: editorMinHeight,
    color: "transparent",
    width: "100%",
    height: 'auto'
  },
  mention: {
    fontSize: 16,
    fontWeight: "400",
    backgroundColor: "rgba(36, 77, 201, 0.05)",
    color: "#244dc9"
  }
});
