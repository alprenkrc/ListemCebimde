import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'
import MyCard2 from '../../components/myCard2'
import useMeatFishChickenStore from '../../store/useMeatFishChickenStore'
import meatFishChickenpic from "../../assets/meatFishChicken.png";

const meatFishChicken = () => {

  const [newItem, setNewItem] = useState('');
  const loadFromStorage = useMeatFishChickenStore((state) => state.loadFromStorage);
  const addItem = useMeatFishChickenStore((state) => state.addItem);
  const data = useMeatFishChickenStore((state) => state.data);

  useEffect(() => {
    loadFromStorage();
  }, []);

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      const newItemObject = {
        id: data.length + 1,
        header: newItem.trim(),
      };
      addItem(newItemObject);
      setNewItem('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Et, Balık ve Tavuk</Text>
      <View style={{ borderBottomColor: 'black', borderWidth: 1, width: '100%' }} />
      <ScrollView contentContainerStyle={styles.cards}>
        {data.map((item) => (
          <MyCard2 key={item.id} header={item.header} productName={item.header} src={meatFishChickenpic} />
        ))}
      </ScrollView>
      <View style={styles.addProductContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ürün adı girin"
          value={newItem}
          onChangeText={(text) => setNewItem(text)}
        />
        <TouchableOpacity style={styles.addProductButton} onPress={handleAddItem}>
          <Text style={styles.buttonText}>Ürün Ekle</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 40
  },
  header: {
    fontSize: 24,
    marginBottom: 10
  },
  cards: {
    gap: 10,
    marginTop: 10,
    marginBottom: 20,
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row"
  },
  addProductContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addProductButton: {
    padding: 10,
    backgroundColor: "#EEDEC6",
    borderRadius: 20,
    margin: 10
  },
  input: {
    flex: 1,
    height: 40,
    margin : 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
  },

})

export default meatFishChicken;