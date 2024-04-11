import React, { useState, useCallback } from "react";
import {StyleSheet,Text,View,Image,TouchableOpacity,Modal,TextInput,ToastAndroid} from "react-native";
import useListStore from "../store/listStore";

const MyCard2 = ({ header, src, productName }) => { 
  const [modalVisible, setModalVisible] = useState(false);
  const [listName, setListName] = useState("");
  const addList = useListStore((state) => state.addList);

  const toggleModal = useCallback(() => {
    setModalVisible((prevState) => !prevState);
  }, []);

  const handleAddList = (productName) => { 
    addList(listName, productName);
    setListName("");
    showToastList();
    toggleModal();
  };

  const showToast = () => {
    ToastAndroid.show('Ürün Eklendi', ToastAndroid.SHORT); 
  }

  const showToastList = () => {
    ToastAndroid.show('Liste Oluşturuldu', ToastAndroid.SHORT); 
  }
  
  const handleAddItemToList = (listIndex, item) => {
    useListStore.getState().addItemToList(listIndex, item);
    showToast();
    toggleModal();
  };

  const lists = useListStore((state) => state.lists);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal} style={styles.card}>
        <View>
          <Image source={src} style={styles.image} />
          <Text style={styles.header}>{header}</Text>
        </View>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
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

            <View style={{ borderWidth: 1, width: "100%", margin: 10, alignSelf: "center" }} />

            <View style={styles.inputContainer}>
              <View >
                {lists.map((list, index) => (
                  <View key={index} style={{marginBottom: 5}} >
                    
                    <View style={styles.listBox}>

                        <Text>⚫ {list.title}</Text>

                        <TouchableOpacity
                          style={styles.addButton}
                          onPress={() => handleAddItemToList(index, productName)}
                        >
                          <Text>Ürünü Ekle</Text>
                        </TouchableOpacity>

                    </View>

                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: 150,
    backgroundColor: "#EEDEC6",
    borderRadius: 20,
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 120,
    height: 100,
  },
  header: {
    textAlign: "center",
    marginTop: 10,
  },
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
  input: {
    borderWidth: 1,
    borderRadius: 20,
    paddingRight: 80,
    paddingHorizontal: 10,
    padding: 10,
  },
  addButton: {
    padding: 15,
    backgroundColor: "#EEDEC6",
    borderRadius: 20,
    
  },
  separator: {
    width: "100%",
    borderWidth: 1,
    marginVertical: 10,
  },
  listBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,

  }
});

export default MyCard2;
