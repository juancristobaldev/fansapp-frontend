import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

import * as sizes from '../../constants/sizes';

export const ButtonTrip = ({
  primaryColor,
  secondaryColor,
  colorTitle,
  title,
  onPress,
  loading,
  styleTitle,
  sizeTitle = sizes.smallFont,
  primaryContainerStyle,
  icon,
  styleIcon,
  styleTouchable,
  space = 70,
}) => {
  const {width} = Dimensions.get('screen');

  let styleText = {};

  if (icon) {
    styleText.position = 'absolute';
    styleText.width = width - 40;
    styleText.textAlign = 'center';
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        position: 'relative',
        paddingTop: space,
        ...styleTouchable,
      }}>
      <View
        style={{
          backgroundColor: primaryColor,
          width: width - 40,
          height: 50,
          position: 'absolute',
          zIndex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          ...primaryContainerStyle,
        }}>
        {!loading ? (
          <View style={{flexDirection: 'row', position: 'relative'}}>
            {icon && (
              <View
                style={{
                  width: '20%',
                }}>
                <FontAwesomeIcon
                  size={sizes.mediumFont}
                  style={styleIcon}
                  icon={icon}
                />
              </View>
            )}
            <Text
              style={{

                fontSize: sizeTitle,
                fontWeight: '600',
                textAlign: 'center',
                color: colorTitle,
                ...styleTitle,
                ...styleText,
                left:0
              }}>
              {title}
            </Text>
          </View>
        ) : (
          <ActivityIndicator color={'white'} />
        )}
      </View>
      <View
        style={{
          backgroundColor: secondaryColor,
          width: width - 40,
          height: 50,
          top: 5,
          left: 5,
          position: 'absolute',
          zIndex: 0,
        }}></View>
    </TouchableOpacity>
  );
};
