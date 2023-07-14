import React, {useState, useEffect} from 'react';
import { SafeAreaView } from 'react-native';
import MiniatureList from '../components/MiniatureList';
import { getMiniaturesApi } from '../api/miniature';

const SubCatMin = ({ route }) => {
  const { mainCategory, subCategory } = route.params;
  const [miniatures, setMiniatures] = useState([])

  useEffect(() => {
    (async () => {
      await loadMiniatures();
    })();
  }, [])

  const loadMiniatures = async () => {
    try {
      const response = await getMiniaturesApi(mainCategory, subCategory);
      const miniaturesArr = [];

      for await (const category of response) {
        miniaturesArr.push(category);
      }

      setMiniatures([...miniatures, ...miniaturesArr]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <SafeAreaView>
      <MiniatureList miniatures={miniatures} />
    </SafeAreaView>
  );
}

export default SubCatMin;