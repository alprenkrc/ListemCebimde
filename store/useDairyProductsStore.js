import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useDairyProductsStore = create((set) => ({
    data: [
        {
            "id": 1,
            "header": "Peynir"
          },
          {
            "id": 2,
            "header": "Ayran"
          },
          {
            "id": 3,
            "header": "Tereyağı"
          },
          {
            "id": 4,
            "header": "Kaymak"
          },
          {
            "id": 5,
            "header": "Yoğurt"
          }
    ],
    loadFromStorage: async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@dairyProductsData');
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
          AsyncStorage.setItem('@dairyProductsData', JSON.stringify(newData)); 
          return { data: newData };
        });
      } catch (e) {
        console.error('Error saving data to AsyncStorage:', e);
      }
    },
  }));
  
  export default useDairyProductsStore;