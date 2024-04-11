import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useStableFoodStore = create((set) => ({
    data: [
        {
            "id": 1,
            "header": "Ekmek ve Tahıllar"
          },
          {
            "id": 2,
            "header": "Süt ve Süt Ürünleri"
          },
          {
            "id": 3,
            "header": "Yumurta"
          },
          {
            "id": 4,
            "header": "Kuru baklagiller"
          }
    ],
    loadFromStorage: async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@stableFoodData');
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
          AsyncStorage.setItem('@stableFoodData', JSON.stringify(newData)); 
          return { data: newData };
        });
      } catch (e) {
        console.error('Error saving data to AsyncStorage:', e);
      }
    },
  }));
  
  export default useStableFoodStore;