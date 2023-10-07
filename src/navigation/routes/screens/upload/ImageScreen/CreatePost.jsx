import {StyleSheet, Switch, Text, Touchable} from 'react-native';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Input} from '../../../../../components/generals/Input';
import {TabMenu} from '../../../../../components/TabMenu';

import {routesUpload} from '../../../routes';

import {Dimensions} from 'react-native';

import * as icons from '@fortawesome/free-solid-svg-icons';
import * as sizes from '../../../../../constants/sizes';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {openPicker} from 'react-native-image-crop-picker';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  containerTitle: {
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: sizes.mediumFont,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: sizes.mediumSmallFont,
    fontWeight: '400',
  },
});

export const CreatePost = ({navigation}) => {
  const openImagePicker = async () => {
    try {
      const result = await openPicker({
        cropping: true,
      });

      // La imagen seleccionada y recortada se almacena en pickedImage.path
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        height: height,
      }}>
      <StatusBar />
      <View
        style={{
          height: height,
        }}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Upload File</Text>
          <Text style={styles.subTitle}>Image</Text>
        </View>
        <Input
          onPress={() =>
            navigation.navigate('image&video', {
              screen: 'set-location',
            })
          }
          button={true}
          marginBottom={25}
          color={'#4B4B4B'}
          colorIcon={'#4B4B4B'}
          stylesContainer={{
            marginVertical: 25,
            marginHorizontal: 20,
            backgroundColor: '#F0F0F0',
            borderWidth: 0,
          }}
          placeholder={'Choose a location'}
          iconLeft={icons.faLocationDot}
        />
        <TouchableOpacity
          onPress={() => openImagePicker()}
          style={{
            backgroundColor: '#F0F0F0',
            height: height * 0.275,
            marginBottom: 25,
            paddingVertical: 0,
            marginHorizontal: 20,
            justifyContent: 'center',
            borderRadius: 5,
          }}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <FontAwesomeIcon
              color="#BFBFBF"
              size={sizes.bigSize}
              icon={icons.faFileImage}
            />
            <Text
              style={{
                fontSize: sizes.smallFont,
                color: '#BFBFBF',
                marginTop: 15,
                fontWeight: '700',
              }}>
              Upload a image
            </Text>
          </View>
        </TouchableOpacity>
        <Input
          multiline={true}
          minHeight={height * 0.15}
          marginBottom={25}
          stylesContainer={{
            padding: 10,
            marginHorizontal: 20,
            backgroundColor: '#F0F0F0',
            borderWidth: 0,
          }}
          color={'#4B4B4B'}
          colorIcon={'#4B4B4B'}
          placeholder={'Enter a description to your post...'}
        />
        <Text
          style={{
            fontSize: sizes.bigSmallFont,
            fontWeight: 'bold',
            marginHorizontal: 20,
            paddingBottom: 20,
          }}>
          Options
        </Text>
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: 'row',
          }}>
          <Switch />
          <Text
            style={{
              fontSize: sizes.smallFont,
              marginLeft: 10,
            }}>
            Only suscriptors
          </Text>
        </View>
      </View>
      <TabMenu routes={routesUpload} navigation={navigation} />
    </SafeAreaView>
  );
};
