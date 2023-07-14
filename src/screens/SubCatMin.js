import React, {useState, useEffect} from 'react';
import { SafeAreaView,StyleSheet,Text } from 'react-native';
import MiniatureList from '../components/MiniatureList';
import { getMiniaturesApi, getSubCategoriesDetailsById } from '../api/miniature';
import { Link } from '@react-navigation/native';

const SubCatMin = ({ route }) => {
  const { mainCategory, subCategory } = route.params;
  const [miniatures, setMiniatures] = useState([])
  const [subDetails, setSubDetails] = useState({})
  useEffect(() => {
    (async () => {
      await loadMiniatures();
      await loadSubDetails();
    })();
  }, [])

  const loadSubDetails = async () => {
    try {
      const response = await getSubCategoriesDetailsById(subCategory);

      setSubDetails(response);
    } catch (err) {
      console.log(err);
    }
  }
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

  const categoryStyle = Object.keys(subDetails).length ? styles.navText : { display: 'none', ...styles.navText };

  return (
    <SafeAreaView>
      <Text style={categoryStyle}>
        <Link to={{screen: 'Collectex'}}>{subDetails.category_name}</Link>
        <Text> --&gt; {subDetails.name}</Text>
      </Text>
      <MiniatureList miniatures={miniatures} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navText: {
    padding: 10,
    fontSize: 20,
  }
})

export default SubCatMin;