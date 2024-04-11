import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useListStore = create((set) => ({
  lists: [],
  addList: async (title) => {
    try {
      const newList = { title, items: [] };
      const updatedLists = [...useListStore.getState().lists, newList];
      await AsyncStorage.setItem('@lists', JSON.stringify(updatedLists));
      set({ lists: updatedLists });
    } catch (error) {
      console.error('Error adding list:', error);
    }
  },
  removeList: async (listIndex) => {
    try {
      const updatedLists = useListStore
        .getState()
        .lists.filter((_, index) => index !== listIndex);
      await AsyncStorage.setItem('@lists', JSON.stringify(updatedLists));
      set({ lists: updatedLists });
    } catch (error) {
      console.error('Error removing list:', error);
    }
  },
  addItemToList: async (listIndex, item) => {
    try {
      const updatedLists = useListStore.getState().lists.map((list, index) =>
        index === listIndex ? { ...list, items: [...list.items, item] } : list
      );
      await AsyncStorage.setItem('@lists', JSON.stringify(updatedLists));
      set({ lists: updatedLists });
    } catch (error) {
      console.error('Error adding item to list:', error);
    }
  },
}));

const loadListsFromStorage = async () => {
  try {
    const storedLists = await AsyncStorage.getItem('@lists');
    if (storedLists) {
      useListStore.setState({ lists: JSON.parse(storedLists) });
    }
  } catch (error) {
    console.error('Error loading lists from AsyncStorage:', error);
  }
};

loadListsFromStorage();

export default useListStore;
