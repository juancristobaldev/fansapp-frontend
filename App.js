/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React, {useEffect, useState} from 'react';
import {SignIn} from './src/components/auth/SignIn';
import {SignUp} from './src/components/auth/SignUp';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Feed} from './src/navigation/screens/Feed';
import {Local} from './src/navigation/screens/Local';

import {Profile} from './src/navigation/screens/Profile';
import {Settings} from './src/navigation/screens/Settings';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Lobby} from './src/components/auth/Lobby';
import {View} from 'react-native';
import { StackUnLoggedin } from './src/navigation/stacks/StackUnLoggedin';
import { StackLoggedin } from './src/navigation/stacks/StackLoggedin';

import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();


function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [loading, setLoading] = useState(true);

  const isAuth = async () => {
    const token = await AsyncStorage.getItem('@token');
    await setIsLoggedin(token);
    setLoading(false);
  };

  useEffect(() => {
    isAuth();
  }, []);

  const Stack = createStackNavigator();

  if (loading) return <View />;
  else {
    return (
      <NavigationContainer>
          {!isLoggedin ? <StackUnLoggedin /> : <StackLoggedin />}
      </NavigationContainer>
    );
  }
}

export default App;
