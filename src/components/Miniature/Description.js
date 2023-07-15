import React from 'react';
import { StyleSheet, SafeAreaView, Text, Button, View } from 'react-native';

const Description = (props) => {
  const { width, height, diet, period, meaning, fun_fact, likes } = props;

  const dietStyle = diet ? styles.text : { display: 'none', ...styles.text };
  const periodStyle = period ? styles.text : { display: 'none', ...styles.text };
  const meaningStyle = meaning ? styles.text : { display: 'none', ...styles.text };

  return (
    <SafeAreaView  style={styles.content}>
      <Text style={styles.text}>{width}cm x {height}cm</Text>
      <View>
        <Text style={dietStyle}>Diet: {diet}</Text>
        <Text style={periodStyle}>Period: {period}</Text>
        <Text style={meaningStyle}>Meaning: {meaning}</Text>
      </View>
      <Text style={styles.text}>Fun Facts: {fun_fact}</Text>
      <Button title={`Like: ${likes}`} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 200,
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});

export default Description;