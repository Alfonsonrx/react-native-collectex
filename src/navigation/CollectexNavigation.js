import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CollectexScreen from "../screens/Collectex";
import MiniatureScreen from "../screens/Miniature";
import SubCategoryScreen from "../screens/SubCatMin";

const Stack = createNativeStackNavigator();

const CollectexNavigation = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Collectex" component={CollectexScreen} />
      <Stack.Screen name="SubCategory" component={SubCategoryScreen} />
      <Stack.Screen name="Miniature" component={MiniatureScreen} />
    </Stack.Navigator>
  );
}

export default CollectexNavigation;