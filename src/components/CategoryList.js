import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import CategoryDropdown from './CategoryDropdown';

const CategoryList = (props) => {
  const {categories} = props;
  
  return (
    categories.map((c)=>{
      return <CategoryDropdown key={c.id} category={c} />
    })
  );
}

export default CategoryList;