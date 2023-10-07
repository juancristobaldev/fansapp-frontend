import {Dimensions, StyleSheet, Text} from 'react-native';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {ButtonTrip} from '../generals/ButtonTrip';
import {ContinueWithFacebook} from './components/ContinueWithFacebook';
import {ContinueWithGoogle} from './components/ContinueWithGoogle';

import * as themes from '../../constants/theme';
import * as sizes from '../../constants/sizes';
import {useState} from 'react';

export const Lobby = ({navigation}) => {
  const {height: heightScreen} = Dimensions.get('screen');

  const buttonsAuth = [
    {title: 'Sign in', onPress: () => navigation.navigate('sign-in')},
    {title: 'Sign up', onPress: () => navigation.navigate('sign-up')},
  ];

  const [layoutView, setLayoutView] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const onLayout = event => {
    const {x, y, width, height: heightV} = event.nativeEvent.layout;
    setLayoutView({
      x: x,
      y: y,
      width: width,
      height: heightV,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar />
      <View
        onLayout={onLayout}
        style={{
          paddingHorizontal: 20,
          marginTop:( heightScreen - layoutView.height) / 2.5,
        }}>
        <Text style={styles.title}>Auth</Text>
        <Text style={styles.subTitle}>
          Please choose the way by you want to authenticate.
        </Text>
        {buttonsAuth.map((item, index) => (
          <ButtonTrip
          key={index}
            title={item.title}
            onPress={item.onPress}
            colorTitle={'white'}
            primaryColor={index === 1 ? themes.PRIMARY_COLOR : 'black'}
            secondaryColor={index === 1 ? 'black' : themes.PRIMARY_COLOR}
          />
        ))}
        <Text style={{...styles.subTitle, marginTop:10,textAlign: 'center'}}>
          Or continue with a social media
        </Text>
        <ContinueWithGoogle />
        <ContinueWithFacebook />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
    height: '100%',
  },
  title: {
    fontSize: sizes.bigSize,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: sizes.smallFont,
    marginBottom: 20,
  },
});
