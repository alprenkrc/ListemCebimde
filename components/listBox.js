import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import useListStore from "../store/listStore";

const ListBox = () => {
  const lists = useListStore((state) => state.lists);
  const removeList = useListStore((state) => state.removeList);

  const handleRemoveList = (listIndex) => {
    removeList(listIndex);
  };
  
  console.log("Lists:", lists);

  return (
    <View>
      {lists.map((list, index) => (
        <View key={index} style={styles.listContainer}>
          <View style={styles.listBox}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                {list.title}
              </Text>
              <TouchableOpacity
                onPress={() => handleRemoveList(index)}
              >
                <AntDesign name="delete" size={24} color="black" />
              </TouchableOpacity>
            </View>
            {list.items.map((item, itemIndex) => (
              <Text style={{fontSize: 18}} key={itemIndex}>- {item}</Text>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
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

export default ListBox;
