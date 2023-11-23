import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, Button } from 'react-native';

import { getMiniatureFavoriteApi } from '../api/favorite';
import { getMiniatureDetailsById } from '../api/miniature';
import useAuth from '../hooks/useAuth';
import MiniatureList from '../components/MiniatureList';
import NoLogged from '../components/NoLogged';

const Favorite = () => {
  const [miniatures, setMiniatures] = useState([]);
  const { auth } = useAuth();

  useEffect(()=>{
    if (auth) {
      (async () => {
        const response = await getMiniatureFavoriteApi();

        const miniatureArr = [];
        for await (const id of response) {
          const miniature = await getMiniatureDetailsById(id);

          miniatureArr.push(miniature);
        }
        
        setMiniatures(miniatureArr);
      })();
    }
  });

  return !auth ? <NoLogged /> : <MiniatureList miniatures={miniatures}/>;
}

export default Favorite;