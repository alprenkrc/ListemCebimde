import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useFruitAndVegetableStore = create((set) => ({
    data: [
        {
            "id": 1,
            "header": "Elma"
          },
          {
            "id": 2,
            "header": "Brokoli"
          },
          {
            "id": 3,
            "header": "Armut"
          },
          {
            "id": 4,
            "header": "Elka"
          }
    ],
    loadFromStorage: async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@fruitAndVegetableData');
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
          AsyncStorage.setItem('@fruitAndVegetableData', JSON.stringify(newData));
          return { data: newData };
        });
      } catch (e) {
        console.error('Error saving data to AsyncStorage:', e);
      }
    },
  }));
  
  export default useFruitAndVegetableStore;