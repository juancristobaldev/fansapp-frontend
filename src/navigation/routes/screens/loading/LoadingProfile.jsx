import {Dimensions, StyleSheet} from 'react-native';
import {View} from 'react-native';

import * as sizes from '../../../../constants/sizes';
import {styles} from '../../../../styles/MainProfileStyle';
import {Post} from './LoadingPost';

export const LoadingProfile = ({state}) => {
  console.log(state);

  const {height, width} = Dimensions.get('screen');

  const Media = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={styles.icon} />
        <View style={styles.stats} />
      </View>
    );
  };

  return (
    <View>
      <View style={styles.frontPage}></View>
      <View style={styles.frontContainer}>
        <View style={styles.circle}>
          <View style={styles.out} />
          <View style={styles.in} />
        </View>
        <View style={styles.container}>
          <View style={styles.name} />
          <View>
            <View style={styles.description} />
            <View style={styles.description} />
          </View>
          <View style={styles.button} />
          <View style={styles.containerStats}>
            <Media />
            <Media />
            <Media />
            <Media />
          </View>
          <Post marginTop={40} />
        </View>
      </View>
    </View>
  );
};
