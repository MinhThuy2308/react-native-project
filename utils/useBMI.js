import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export function useBMI() {
  const [bmi, SetBmi] = useState(0);

  useEffect(() => {
    async function getUserBMIData() {
      const value = await AsyncStorage.getItem('userBMI');
      SetBmi(value);
    }

    getUserBMIData();
  }, []);
  
  return bmi;
}
