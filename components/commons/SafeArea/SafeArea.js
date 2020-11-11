import React from "react";
import { SafeAreaView } from "react-native";
import styles from "./styles";

const SafeArea = ({ children }) => {
  return (
    <SafeAreaView style={[styles.androidSafeArea, styles.layout]}>
      {children}
    </SafeAreaView>
  );
};

export default SafeArea;
