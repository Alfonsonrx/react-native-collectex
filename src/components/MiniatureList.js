import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import MiniatureCard from './MiniatureCard';

const MiniatureList = (props) => {
  const { miniatures } = props;
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

const styles = StyleSheet.create({ 
  flatListContentContainer: { 
    paddingHorizontal: 5,
  }, 
});

export default MiniatureList;