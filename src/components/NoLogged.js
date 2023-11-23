import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NoLogged = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <Text style={styles.text}>Para ver esta pantalla debes logearte</Text>
      <Button
        title='Ir al login'
        onPress={() => navigation.navigate("Account")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 50,
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
  }
})

export default NoLogged;