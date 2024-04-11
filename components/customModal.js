import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useState } from "react";
import useListStore from "../store/listStore";

const CustomModal  = ({isVisible, onClose, productName}) => {

    const [listName, setListName] = useState("");
    const addList = useListStore((state) => state.addList);

  const handleAddList = (productName) => {
    addList(listName, productName);
    setListName("");
    onClose();
    showToast();
  };

  const showToast = () => {
    ToastAndroid.show("Liste Oluşturuldu", ToastAndroid.SHORT);
  };


  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
      >
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Liste Adını Giriniz.."
                style={styles.input}
                value={listName}
                onChangeText={setListName}
              />

              <TouchableOpacity
                style={styles.addButton}
                onPress={() => handleAddList(productName)} 
              >
                <Text>Listeyi Ekle</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal ;

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",

  },
  modalContent: {
    width: "95%",
    backgroundColor: "white",
    padding: 22,
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  inputContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between"
  },
  addButton: {
    padding: 15,
    backgroundColor: "#EEDEC6",
    borderRadius: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 20,
    paddingRight: 80,
    paddingHorizontal: 10,
    padding: 10,
  }
});
