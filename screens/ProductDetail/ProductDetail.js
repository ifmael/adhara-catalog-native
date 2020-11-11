import React from "react";
import { View, Text } from "react-native";
import layout from "../../styles/layout";
import styles from "./styles";

const ProductDetail = ({ route }) => {
  const { name, description, price, category, rating } = route.params;
  return (
    <View style={layout.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <Text>{category}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>

      <View style={styles.rating}>
        <Text style={styles.ratingText}>{price}€</Text>
        <Text style={styles.ratingText}>{"♥".repeat(rating)}</Text>
      </View>
    </View>
  );
};

export default ProductDetail;
