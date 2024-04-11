import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useSnacksStore = create((set) => ({
    data: [
        {
            "id": 1,
            "header": "Kola"
          },
          {
            "id": 2,
            "header": "Cips"
          },
          {
            "id": 3,
            "header": "Çikolara"
          },
          {
            "id": 4,
            "header": "Kuru Yemiş"
          },
          {
            "id": 5,
            "header": "Meyve Suyu"
          },
    ],
    loadFromStorage: async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@snacksData');
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
          AsyncStorage.setItem('@snacksData', JSON.stringify(newData)); 
          return { data: newData };
        });
      } catch (e) {
        console.error('Error saving data to AsyncStorage:', e);
      }
    },
  }));
  
  export default useSnacksStore;