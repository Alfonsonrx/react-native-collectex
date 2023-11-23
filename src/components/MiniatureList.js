import React, { useState } from 'react';
import { FlatList, StyleSheet, ActivityIndicator, Platform  } from 'react-native';
import MiniatureCard from './MiniatureCard';
import { getMiniaturesApi } from '../api/miniature';

const MiniatureList = (props) => {
  const { miniatures, loadMiniatures, isNext } = props;

  const loadMore = () => {
    loadMiniatures();
  }

  const flatListStyle = isNext ? styles.flatListContentContainer : { paddingBottom: 60, ...styles.flatListContentContainer };

  return (
    <FlatList
      data={miniatures}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(miniature) => String(miniature.id)}
      renderItem={({ item }) => <MiniatureCard miniature={item} />}
      contentContainerStyle={flatListStyle}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator size="large" style={styles.spinner} color="#00ae5c" />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 10 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  },
});

export default MiniatureList;