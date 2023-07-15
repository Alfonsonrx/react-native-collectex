import React from "react";
import { StyleSheet, View, SafeAreaView, Text, Image } from "react-native";

const Header = (props) => {
  const { name, id, is_new, image, color } = props;

  const imgStyle = [{ borderColor: color, ...styles.image }];
  const newStyle = is_new ? { backgroundColor: color, ...styles.new } : { display: 'none', ...styles.new };
  const imgNewStyle = is_new ? styles.imgNew : { display: 'none', ...styles.imgNew };

  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <Text style={newStyle}>New</Text>
        <Text style={styles.order}>#{`${id}`.padStart(3, 0)}</Text>
      </View> 
      <View style={styles.contentImg}>
        <Image source={{ uri: image }} style={imgStyle} />
        <Text style={imgNewStyle}>New</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 27,
  },
  new: {
    left: -50,
    color: "#fff",
    fontWeight: "bold",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 10
  },
  order: {
    color: "#fff",
    fontWeight: "bold",
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 170,
  },
  imgNew: {
    position: "absolute",
    right: 40,
    top: -135,
    color: "#fff",
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 14,
    fontWeight: "bold",
    backgroundColor: "#8bc541"
  },
  image: {
    width: 300,
    height: 300,
    borderWidth: 2,
    resizeMode: "contain",
  },
});

export default Header;