import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import GlobalContext from "../../utils/context/GlobalContext";
import { ProductItem } from "../../components/products";
import layout from "../../styles/layout";
import styles from "./styles";

const Products = () => {
  const { products, isLoading } = useContext(GlobalContext);

  return (
    <View style={layout.background}>
      {isLoading ? (
        <View style={styles.loading}>
          <Text> loading</Text>
        </View>
      ) : (
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductItem {...item} />}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default Products;
