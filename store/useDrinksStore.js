import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useDrinksStore = create((set) => ({
    data: [
        {
            "id": 1,
            "header": "Kola"
          },
          {
            "id": 2,
            "header": "Su"
          },
          {
            "id": 3,
            "header": "Ayran"
          },
          {
            "id": 4,
            "header": "Süt"
          },
          {
            "id": 5,
            "header": "Meyve Suyu"
          },
    ],
    loadFromStorage: async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@drinksData');
        if (jsonValue !== null) {
          set({ data: JSON.parse(jsonValue) });
        }
      } catch (e) {
        console.error('Error loading data from AsyncStorage:', e);
      }
    },
    addItem: async (newItem) => {
      try {
        set((state) => {
          const newData = [...state.data, newItem];
          AsyncStorage.setItem('@drinksData', JSON.stringify(newData)); 
          return { data: newData };
        });
      } catch (e) {
        console.error('Error saving data to AsyncStorage:', e);
      }
    },
  }));
  
  export default useDrinksStore;