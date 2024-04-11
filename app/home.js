import React, { useState} from "react";
import {StyleSheet,Text,View,ScrollView, Touchable, TouchableOpacity,} from "react-native";
import { Link } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MyCard from "../components/myCard.js";
import ListBox from "../components/listBox.js";
import CustomModal from "../components/customModal.js";


const categoriesData = [
  {
    id: 1,
    href: "categories/fruitandvegetable",
    src: require("../assets/fruitAndVegetable.png"),
    header: "Meyve ve Sebze",
  },
  {
    id: 2,
    href: "categories/meatFishChicken",
    src: require("../assets/meatFishChicken.png"),
    header: "Et, Balık, Tavuk",
  },
  {
    id: 3,
    href: "categories/dairyProducts",
    src: require("../assets/dairyProducts.png"),
    header: "Süt Ürünleri",
  },
  {
    id: 4,
    href: "categories/drinks",
    src: require("../assets/drinks.png"),
    header: "İçecekler",
  },
  {
    id: 5,
    href: "categories/snacks",
    src: require("../assets/snacks.png"),
    header: "Atıştırmalık",
  },
  {
    id: 6,
    href: "categories/stableFood",
    src: require("../assets/stableFood.png"),
    header: "Temel Gıda",
  },

];

const home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.lists}>

        <Text style={styles.listText}>Listeler</Text>
        <CustomModal isVisible={modalVisible} onClose={handleCloseModal} />

        <TouchableOpacity onPress={handleOpenModal}>
          <FontAwesome name="plus" size={30} />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: "row", justifyContent: "flex-end", marginRight: 20}}>
        <Link href="lists">
          <View style={styles.seeAll}>
            <FontAwesome name='eye' size={40} />
            <Text style={{fontSize: 20, fontWeight:"bold"}}>Tümünü Gör</Text>
          </View>
        </Link>
      </View>

      <View style={{borderBottomColor: "black",borderWidth: 0.8,}}/>

      <ScrollView style={styles.listContainer}>
          <ListBox/>
      </ScrollView>
      
      <View style={{borderBottomColor: "black",borderWidth: 0.8,}}/>

      <ScrollView contentContainerStyle={styles.categories}>
        {categoriesData.map((data) => {
          return (
            <MyCard
              key={data.id}
              src={data.src}
              header={data.header}
              href={data.href}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEEED6",
  },
  listText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  lists: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
    marginTop: 40
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  input: {
    flex: 1,
    padding: 10,
    margin: 20,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 50,
  },
  categories: {
    gap: 10,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",

  },
  seeAll: {
    alignItems: "center", 
    flexDirection: "row",
    gap: 10,
  },
  listContainer: {
    maxHeight: "25%"
  }
});
