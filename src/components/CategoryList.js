import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import CategoryDropdown from './CategoryDropdown';
import { SafeAreaView } from 'react-native-safe-area-context';

const CategoryList = (props) => {
  const {categories} = props;
  
  return (
    categories.map((c)=>{
      return <CategoryDropdown key={c.id} category={c} navigation={props.navigation}/>
    })
  );
}

export default CategoryList;