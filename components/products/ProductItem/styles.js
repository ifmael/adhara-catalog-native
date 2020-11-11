import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  border: {
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  infoName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  infoPrice: {
    fontSize: 14,
  },
});

export default styles;
