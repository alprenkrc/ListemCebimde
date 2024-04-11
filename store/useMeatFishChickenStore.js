import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useMeatFishChickenStore = create((set) => ({
    data: [
        {
            "id": 1,
            "header": "Et"
          },
          {
            "id": 2,
            "header": "Balık"
          },
          {
            "id": 3,
            "header": "Tavuk"
          }
    ],
    loadFromStorage: async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@meatFishChickenData');
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
          AsyncStorage.setItem('@meatFishChickenData', JSON.stringify(newData));
          return { data: newData };
        });
      } catch (e) {
        console.error('Error saving data to AsyncStorage:', e);
      }
    },
  }));
  
  export default useMeatFishChickenStore;