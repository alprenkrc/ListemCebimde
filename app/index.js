import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { Link } from "expo-router";

import React from "react";
import MilksAndFruits from "../assets/milksAndFruits.png";

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>LİSTEM CEBİMDE</Text>
      <Image source={MilksAndFruits} style={styles.image} />
      
        <Link href="home" style={styles.welcomeButton}>
          Hoşgeldiniz
        </Link>

    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ECD9BE",
  },
  image: {
    width: "100%",
    marginBottom: 40,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 80,
    color: "#4D360B",
  },
  welcomeButton: {
    backgroundColor: "#4D360B",
    alignSelf: "center",
    padding: 20,
    borderRadius: 50,
    fontSize: 20,
    color: "white"
  }
});
