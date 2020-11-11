import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainContainer from "./components/commons/MainContainer";
import { Products, ProductDetail } from "./screens";

const Stack = createStackNavigator();

const App = () => {
  const headerProductDetail = ({ route }) => {
    const { name } = route.params;
    return {
      title: `${name} details`,
      headerTitleAlign: "center",
    };
  };

  return (
    <MainContainer>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Product"
            component={Products}
            options={{
              headerTitle: "List of products",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={headerProductDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MainContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
