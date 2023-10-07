import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Dimensions, StyleSheet, View} from 'react-native';

import * as sizes from '../../../../constants/sizes';
import * as icons from '@fortawesome/free-regular-svg-icons';

export const Post = ({marginTop = 0}) => {
  const {height, width} = Dimensions.get('screen');

  const postHeight = height * 0.5;

  const styles = StyleSheet.create({
    post: {
      height: postHeight,
      paddingLeft: 0,
      paddingTop: 20,
      marginTop: marginTop,
    },
    headerPost: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    circle: {
      height: height * 0.075,
      width: height * 0.075,
      borderRadius: height * 0.075,
      backgroundColor: '#F5F5F5',
    },
    author: {
      width: '100%',
      marginLeft: 10,
    },
    name: {
      backgroundColor: '#F5F5F5',
      width: '40%',
      height: height * 0.025,
      marginBottom: 10,
      borderRadius: 5,
    },
    location: {
      backgroundColor: '#F5F5F5',
      width: '30%',
      height: height * 0.015,
      borderRadius: 5,
    },
    photo: {
      backgroundColor: '#F5F5F5',
      width: width - 40,
      height: postHeight * 0.62,
      borderRadius: 5,
    },

    stats: {
      marginTop: 20,
      flexDirection: 'row',
    },
    statsNumber: {
      backgroundColor: '#F5F5F5',
      width: 50,
      height: sizes.mediumFont,
      marginLeft: 10,
      borderRadius: 5,
    },
    divStats: {
      flexDirection: 'row',
    },
  });

  return (
    <View style={styles.post}>
      <View style={styles.headerPost}>
        <View style={styles.circle} />
        <View style={styles.author}>
          <View style={styles.name} />
          <View style={styles.location} />
        </View>
      </View>
      <View style={styles.photo} />
      <View style={styles.stats}>
        <View style={styles.divStats}>
          <FontAwesomeIcon
            size={sizes.mediumFont}
            color={'#F5F5F5'}
            icon={icons.faHeart}
          />
          <View style={styles.statsNumber}></View>
        </View>
        <View style={{...styles.divStats, marginLeft: 10}}>
          <FontAwesomeIcon
            size={sizes.mediumFont}
            color={'#F5F5F5'}
            icon={icons.faComment}
          />
          <View style={styles.statsNumber}></View>
        </View>
      </View>
    </View>
  );
};
