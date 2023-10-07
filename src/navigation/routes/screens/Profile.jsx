import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useMe} from '../../../../hooks/useMe';
import {ButtonTrip} from '../../../components/generals/ButtonTrip';
import {TabMenu} from '../../../components/TabMenu';

import * as sizes from '../../../constants/sizes';
import * as icons from '@fortawesome/free-solid-svg-icons';

import {PRIMARY_COLOR} from '../../../constants/theme';
import {styles} from '../../../styles/MainProfileStyle';
import {LoadingProfile} from './loading/LoadingProfile';
import {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {routesApp} from '../../routes/routes';

import {openPicker} from 'react-native-image-crop-picker';


export const Profile = ({navigation}) => {
  const {state, isLoading} = useMe();

  const {mediasCount} = state;



  useEffect(() => {
    if (state.user) {
      console.log(mediasCount);
    }
  }, [state.user]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
      }}>
      <StatusBar />
      <View style={stylesProfile.container}>
        <View style={stylesProfile.containerTitle}>
          <Text style={stylesProfile.title}>Profile</Text>
        </View>
        {state.loading || !state.user ? (
          <LoadingProfile state={state} />
        ) : (
          <View>
            {state.user.profile.frontPage ? (
              <Image />
            ) : (
              <View style={styles.frontPage} />
            )}
            <View style={styles.frontContainer}>
              <View style={styles.circle}>
                <View style={styles.out} />
                {!state.user.profile.photo ? (
                  <View style={styles.in} />
                ) : (
                  <Image
                    source={{uri: state.user.profile.photo}}
                    style={styles.in}
                  />
                )}
              </View>
              <View style={styles.container}>
                <Text style={stylesProfile.name}>{state.user.name}</Text>
                <Text style={stylesProfile.description}>
                  {!state.user.profile.description
                    ? 'Add a new description to your profile and surprise your followers...'
                    : state.user.profile.description}
                </Text>
                <ButtonTrip
                onPress={() => navigation.navigate('stack-upload')}
                  styleTitle={{
                    fontWeight: '400',
                  }}
                  colorTitle={'white'}
                  title={'Upload a new file'}
                  primaryColor={'black'}
                  secondaryColor={PRIMARY_COLOR}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  {mediasCount.map((item, index) => (
                    <View
                      key={index}
                      style={{
                        marginTop: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <FontAwesomeIcon
                        size={sizes.mediumFont}
                        icon={icons[item.icon]}
                      />
                      <Text
                        style={{
                          marginLeft: 5,
                          fontSize: sizes.mediumFont,
                        }}>
                        {item.count}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
      <TabMenu routes={routesApp} navigation={navigation} />
    </SafeAreaView>
  );
};

const stylesProfile = StyleSheet.create({
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
  name: {
    ...styles.name,
    width: '100%',
    fontSize: 33,
    fontWeight: '700',
    backgroundColor: 'transparent',
    marginBottom: 0,
  },
  description: {
    marginTop: 10,
    fontSize: sizes.mediumSmallFont,
    fontWeight: '300',
    marginBottom: 20,
  },
});
