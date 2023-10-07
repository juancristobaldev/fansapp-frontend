import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {TabMenu} from '../../../components/TabMenu';

import * as sizes from '../../../constants/sizes';

import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';

import {
  faHeart,
  faPeopleGroup,
  faPerson,
  faShield,
  faUser,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import {ButtonTrip} from '../../../components/generals/ButtonTrip';
import {PRIMARY_COLOR} from '../../../constants/theme';

import {routesApp} from '../../routes/routes';

export const Settings = ({navigation}) => {
  console.log(navigation);

  const buttons = [
    {icon: faUser, title: 'Profile', onPress: () => {}},
    {icon: faHeart, title: 'Subscriptions', onPress: () => {}},
    {icon: faPeopleGroup, title: 'Subscribers', onPress: () => {}},
    {icon: faWallet, title: 'Wallet', onPress: () => {}},
    {icon: faShield, title: 'Privacity', onPress: () => {}},
    {icon: faPerson, title: 'Account', onPress: () => {}},
  ];

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
      }}>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Settings</Text>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 40,
            height: '100%',
          }}>
          {buttons.map((button, index) => (
            <ButtonTrip
              space={80}
              icon={button.icon}
              primaryContainerStyle={{
                borderWidth: 1,
                borderColor: 'black',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                paddingHorizontal: 0,
              }}
              styleIcon={{
                marginRight: 20,
                marginLeft: 20,
              }}
              secondaryColor={'black'}
              primaryColor={'white'}
              key={index}
              title={button.title}
            />
          ))}
          <ButtonTrip
            styleTouchable={{
              position: 'absolute',
              bottom: 160,
            }}
            primaryColor={'black'}
            secondaryColor={PRIMARY_COLOR}
            colorTitle="white"
            onPress={async () => {
              await AsyncStorage.removeItem('@token');
              RNRestart.Restart();
            }}
            title={'Log out'}
          />
        </View>
      </View>
      <TabMenu routes={routesApp} navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  containerTitle: {
    backgroundColor: 'white',
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  title: {
    fontSize: sizes.mediumFont,
    fontWeight: '700',
  },
});
