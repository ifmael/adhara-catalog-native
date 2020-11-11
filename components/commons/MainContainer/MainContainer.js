import React from "react";
import { View, Text } from "react-native";
import SafeArea from "../SafeArea";
import GlobalContext from "../../../utils/context/GlobalContext";
import { useProducts } from "../../../utils/hooks";

const MainContainer = ({ children }) => {
  const { products, isLoading } = useProducts();
  return (
    <GlobalContext.Provider
      value={{
        products,
        isLoading,
      }}
    >
      <SafeArea>{children}</SafeArea>
    </GlobalContext.Provider>
  );
};

export default MainContainer;
