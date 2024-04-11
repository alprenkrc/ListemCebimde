import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

const MyCard = ({ src, header, href }) => {
  return (
    <Link href={href} asChild>
      <Pressable style={styles.card}>

          <Image style={styles.image} source={src} />
          <Text>{header}</Text>

      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "40%",
    height: 150,
    backgroundColor: "#EEDEC6",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    
    width: "80%",
  },
});

export default MyCard;
