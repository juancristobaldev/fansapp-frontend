import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {color} from '@rneui/base';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import * as sizes from '../../constants/sizes';

export const Input = ({
  onPress,
  button = false,
  iconLeft,
  iconRight,
  placeholder,
  onChange,
  error,
  secureTextEntry = false,
  marginBottom = 0,
  marginBottomError = 7.5,
  stylesContainer,
  minHeight = 0,
  multiline = false,
  color = 'black',
  colorIcon = 'black',
}) => {
  const styles = StyleSheet.create({
    containerInput: {
      flexDirection: 'row',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: error ? 'red' : 'black',
      backgroundColor: error ? '#FFE3E3' : 'white',
      ...stylesContainer,
    },
    icon: {
      margin: 10,
    },
    placeholder: {
      color: 'black',
    },
    textError: {
      fontSize: sizes.verySmallFont,
      marginBottom: marginBottomError,
      color: 'red',
    },
  });

  const RenderComponent = (props) => {
    if (button)
      return <TouchableOpacity onPress={onPress}>{props.children}</TouchableOpacity>;
    else return <>{props.children}</>;
  };

  return (
    <RenderComponent>
      <View style={{...styles.containerInput, marginBottom: marginBottom}}>
        {iconLeft && (
          <FontAwesomeIcon
            color={colorIcon}
            size={sizes.smallFont}
            style={styles.icon}
            icon={iconLeft}
          />
        )}
        {button ? (
          <View
            style={{
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: sizes.smallFont,
                minHeight: minHeight,
                color: color,
              }}>
              {placeholder}
            </Text>
          </View>
        ) : (
          <TextInput
            autoCapitalize={'none'}
            onChangeText={onChange}
            textAlignVertical={'top'}
            multiline={multiline}
            numberOfLines={5}
            textAlign={'left'}
            style={{
              fontSize: sizes.smallFont,
              width: '100%',
              minHeight: minHeight,
              color: color,
            }}
            placeholderTextColor={'black'}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
          />
        )}
        {iconRight && <FontAwesomeIcon icon={iconRight} />}
      </View>
      {error && <Text style={styles.textError}>{error}</Text>}
    </RenderComponent>
  );
};
