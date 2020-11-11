import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import layout from "../../../styles/layout";
import styles from "./styles";

const ProductItem = (props) => {
  const navigation = useNavigation();
  const { name, price } = props;
  const goToDetail = () => {
    navigation.navigate("ProductDetail", props);
  };

  return (
    <View style={[layout.horizontal, styles.border, styles.container]}>
      <View>
        <Text style={styles.infoName}>{name}</Text>
        <Text style={styles.infoPrice}>{price}€</Text>
      </View>
      <TouchableOpacity onPress={goToDetail}>
        <FontAwesome name="chevron-right" size={25} color={"grey"} />
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
