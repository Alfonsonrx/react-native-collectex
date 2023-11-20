import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, Button } from 'react-native';

import { getMiniatureFavoriteApi } from '../api/favorite';

const Favorite = () => {
  const [miniatures, setMiniature] = useState([]);

  return (
    <SafeAreaView>
      <Text>Favorite</Text>
      <Button title="Obtener favs" onPress={checkFavorites} />
    </SafeAreaView>
  );
}

export default Favorite;