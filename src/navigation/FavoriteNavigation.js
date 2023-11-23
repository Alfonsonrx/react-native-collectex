import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoriteScreen from "../screens/Favorite";
import MiniatureScreen from "../screens/Miniature";

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: "Favorites",
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Miniature"
        component={MiniatureScreen}
        options={{
          title: "",
        }}
      />
    </Stack.Navigator>
  );
}