import {Linking, StyleSheet} from 'react-native';

import * as sizes from '../../../constants/sizes';
import * as iconsBrands from '@fortawesome/free-brands-svg-icons';
import {Button} from '@rneui/themed';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import InAppBrowser from 'react-native-inappbrowser-reborn';

import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import {ButtonTrip} from '../../generals/ButtonTrip';

export const ContinueWithGoogle = () => {
  async function openOAuthUrl() {
    try {
      const oauthUrl = 'http://localhost:3000/login/federated/google';

      const result = await InAppBrowser.openAuth(
        oauthUrl,
        'http://localhost:3000/oauth2/redirect/google',
      );

      const {type, url} = result;

      if (type === 'success') {
        const userArray = JSON.parse(
          decodeURIComponent(url.match(/user=(.*?)(#|$)/)[1]),
        );

        if (userArray) {
          const {token} = userArray[0];

          await AsyncStorage.setItem('@token', token);

          RNRestart.Restart();
        }
      }
    } catch (error) {
      console.error('error', error);
    }
  }

  return (
    <ButtonTrip
      onPress={openOAuthUrl}
      styleIcon={{marginRight: 10}}

      title={'Continue with Google'}
      primaryColor={'white'}
      secondaryColor={'black'}
      primaryContainerStyle={{
        borderWidth: 1,
        borderColor: 'black',
      }}
    />
  );
};

const styles = StyleSheet.create({
  titleButton: {
    fontSize: sizes.mediumFont,
  },
  buttonRRSS: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    color: 'black',
    marginBottom: 20,
  },
});
