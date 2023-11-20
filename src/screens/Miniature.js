import { SafeAreaView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getMiniatureDetailsById, getSubCategoriesDetailsById } from '../api/miniature';
import { StyleSheet } from 'react-native';
import { Link } from '@react-navigation/native';
import Header from '../components/Miniature/Header';
import Description from '../components/Miniature/Description';
import Favorite from '../components/Miniature/Favorite';
import useAuth from '../hooks/useAuth';

const colors = [
  '#f47022',
  '#7c3b1c',
  '#007ac9',
  '#ce9d53',
  '#ffea08',
  '#c41426',
]

const Miniature = (props) => {
  const {
    navigation,
    route: { params },
  } = props;
  const { miniature } = props.route.params;
  const [subDetails, setSubDetails] = useState({})
  const auth = useAuth();

  useEffect(() => {
    navigation.setOptions({
      title: "",
      headerRight: () => (
        (auth.userData ? <Favorite miniatureId={miniature?.id} /> : null)
      ),
    });
  }, [navigation, params, miniature])

  useEffect(() => {
    (async () => {
      await loadSubDetails();
    })();
  }, [])

  const loadSubDetails = async () => {
    try {
      const response = await getSubCategoriesDetailsById(miniature.subcategory);

      setSubDetails(response);
    } catch (err) {
      console.log(err);
    }
  }

  let oneDay = new Date().getTime() - (24 * 60 * 60 * 1000)
  let date = new Date(miniature.created);
  let is_new = date.getTime() > oneDay;

  const categoryStyle = Object.keys(subDetails).length ? { color: colors[miniature.category - 1], ...styles.navText } : { display: 'none', ...styles.navText };

  return (
    <SafeAreaView>
      <Text style={categoryStyle}>
        <Link to={{ screen: 'Collectex' }}>{subDetails.category_name}</Link>
        <Text> --&gt; </Text>
        <Link to={{
          screen: 'SubCategory',
          params: {
            mainCategory: miniature.category,
            subCategory: miniature.subcategory
          }
        }}>{subDetails.name}</Link>
      </Text>
      <Header
        name={miniature.name}
        id={miniature.id}
        image={miniature.images.length ? miniature.images[0] : "https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"}
        is_new={is_new}
        color={colors[miniature.category - 1]}
      />
      <Description
        width={miniature.width}
        height={miniature.height}
        diet={miniature.diet}
        period={miniature.period}
        meaning={miniature.meaning}
        fun_fact={miniature.fun_fact}
        likes={miniature.likes}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navText: {
    padding: 10,
    fontSize: 20,
  }
})

export default Miniature;