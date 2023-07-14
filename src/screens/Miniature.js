import { SafeAreaView, Text, Button } from 'react-native'
import React from 'react'

const Miniature = (props) => {
  const { navigation } = props;

  const goToCollectex = () => {
    navigation.navigate("Collectex")
  }
  return (
    <SafeAreaView>
      <Text>Miniature</Text>
      <Button title='Ir a Collectex' onPress={()=>goToCollectex()}/>
    </SafeAreaView>
  );
}

export default Miniature;