import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useEffect, useState} from 'react';

export const useMe = () => {
  const [state, setState] = useState({
    token: false,
    user: false,
    loading: true,
  });

  const getMe = async () => {
    const token = await AsyncStorage.getItem('@token');

    await setState({...state, loading: true});

    const user = await axios
      .get(`http://localhost:3000/users/${token}`)
      .catch(error => {
        console.error(error);
      });

    const {name, email, birthday, profile, token: tokenUser, id} = user.data[0];

    const mediasCount = await axios.get(
      `http://localhost:3000/users/count-media/${id}/all`,
    );

  

    setState({
      token: tokenUser,
      user: {
        name,
        email,
        birthday,
        profile,
      },
      mediasCount:  mediasCount.data,
      loading: false,
    });
  };

  useEffect(() => {
    getMe();
  }, []);

  return {state};
};
