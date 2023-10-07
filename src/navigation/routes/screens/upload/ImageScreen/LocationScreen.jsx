import {StatusBar, Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Input} from '../../../../../components/generals/Input';

import * as icons from '@fortawesome/free-solid-svg-icons';
import {ButtonTrip} from '../../../../../components/generals/ButtonTrip';
import {PRIMARY_COLOR} from '../../../../../constants/theme';

import MapView from 'react-native-maps';

const styles = StyleSheet.create({
    containerMap: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });

export const LocationScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <StatusBar />
      <View>
        <View style={styles.containerMap}>
          <MapView
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}></MapView>
        </View>
        <View
          style={{
            height: '20%',
          }}>
          <Input
            marginBottom={25}
            color={'#4B4B4B'}
            colorIcon={'#4B4B4B'}
            stylesContainer={{
              marginVertical: 25,
              marginHorizontal: 20,
              backgroundColor: '#F0F0F0',
              borderWidth: 0,
            }}
            placeholder={'Search a location...'}
            iconLeft={icons.faLocationDot}
          />
          <ButtonTrip
            styleTouchable={{marginHorizontal: 20}}
            colorTitle={'white'}
            primaryColor={'black'}
            secondaryColor={PRIMARY_COLOR}
            title={'Set location'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
