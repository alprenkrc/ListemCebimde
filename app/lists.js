import React, {useState} from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ListBox from "../components/listBox.js";
import CustomModal from "../components/customModal.js";

const lists = () => {

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
      <View style={{ borderBottomColor: "black", borderWidth: 0.8 }} />
      <ScrollView>
          <ListBox />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#feedca",
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
    marginTop: 40,
  },
  listContainer: {
    flex: 1,
  },
  listBox: {
    backgroundColor: "#EEDEC6",
    margin: 20,
    padding: 20,
    borderRadius: 20,
  },
});

export default lists;
