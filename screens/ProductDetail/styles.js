import { StyleSheet } from "react-native";

const horizontalContainer = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};

const styles = StyleSheet.create({
  header: {
    ...horizontalContainer,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    marginBottom: 30,
  },
  rating: { ...horizontalContainer },
  ratingText: { fontSize: 18 },
});

export default styles;
