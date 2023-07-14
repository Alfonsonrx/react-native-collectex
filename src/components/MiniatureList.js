import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';

const MiniatureList = (props) => {
  const { miniatures } = props;
  console.log(miniatures)
  return (
    <FlatList
      data={miniatures}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(miniature) => String(miniature.id)}
      renderItem={({ item }) => <MiniatureCard miniature={item} />}
      contentContainerStyle={styles.flatListContentContainer} 
      />
  );
}

const styles=StyleSheet.create({flatListContentContainer:{paddingHorizontal:5,},});

export default MiniatureList;