import React, { useState, useEffect } from 'react';
import { SafeAreaView, Button, StyleSheet } from 'react-native';
import { getCategoriesApi } from '../api/miniature';
import CategoryList from '../components/CategoryList';

const Collectex = (props) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    (async () => {
      await loadCategories();
    })();
  }, [])

  const loadCategories = async () => {
    try {
      const response = await getCategoriesApi();
      const categoriesArr = [];

      for await (const category of response) {
        categoriesArr.push(category);
      }

      setCategories([...categories, ...categoriesArr]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <SafeAreaView>
      <CategoryList categories={categories}  navigation={props.navigation} />
    </SafeAreaView>
  );
}

export default Collectex;