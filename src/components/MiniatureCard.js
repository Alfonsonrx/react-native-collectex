import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

const colors = [
  '#f47022',
  '#7c3b1c',
  '#007ac9',
  '#ce9d53',
  '#ffea08',
  '#c41426',
]

export default function MiniatureCard(props) {
  const { miniature } = props;

  const goToMiniature = () => {
    console.log(`Vamos a la miniatura: ${miniature.name}`);
    console.log(miniature.id);
  };

  const bgStyles = {
    backgroundColor: colors[miniature.category-1], ...styles.bgStyles
  };

  return (
    <TouchableWithoutFeedback onPress={goToMiniature}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>
              #{`${miniature.id}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>{miniature.name}</Text>
            <Image source={{ uri: miniature.image?miniature.image:"https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg" }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 140,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 5,
    color: "#00ae5c",
    fontSize: 12,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  image: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#00ae5c",
    position: "absolute",
    resizeMode:'contain',
    bottom: 3,
    right: 3,
    width: 90,
    height: 90,
  },
});