import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import * as sizes from '../../../constants/sizes';
import * as iconsBrands from '@fortawesome/free-brands-svg-icons';
import {StyleSheet} from 'react-native';
import {Button} from '@rneui/base';
import {useNavigation} from '@react-navigation/native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import {ButtonTrip} from '../../generals/ButtonTrip';

export const ContinueWithFacebook = () => {
  const navigation = useNavigation();

  async function openOAuthUrl() {
    try {
      const oauthUrl = 'http://localhost:3000/login/federated/facebook';

      const result = await InAppBrowser.openAuth(
        oauthUrl,
        'http://localhost:3000/oauth2/redirect/facebook',
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
      title={'Continue with Facebook'}
      primaryColor={'white'}
      secondaryColor={'black'}
      primaryContainerStyle={{
        borderWidth:1,
        borderColor:'black'
      }}
    />
  );
};

const styles = StyleSheet.create({

});
