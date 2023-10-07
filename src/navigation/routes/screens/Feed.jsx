
import {Dimensions, StyleSheet} from 'react-native';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

import {TabMenu} from '../../../components/TabMenu';

import * as sizes from '../../../constants/sizes'
import {Post} from './loading/LoadingPost';
import {routesApp} from '../../routes/routes';

export const Feed = ({navigation}) => {
  console.log(navigation.getId);

  const {height, width} = Dimensions.get('screen');

  const LoadingPosts = () => {
    return (
      <View>
        <View style={styles.profilesContainer}>
          <View style={styles.profile}></View>
          <View style={styles.profile}></View>
          <View style={styles.profile}></View>
          <View style={styles.profile}></View>
        </View>
        <View
          style={{
            marginHorizontal: 20,
          }}>
          <Post />
          <Post />
        </View>
      </View>
    );
  };

  const postHeight = height * 0.5;

  const styles = StyleSheet.create({
    post: {
      height: postHeight,
      paddingLeft: 20,
      paddingTop: 20,
    },
    container: {
      height: '100%',
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
    profilesContainer: {
      backgroundColor: '#F5F5F5',
      height: height * 0.11,
      flexDirection: 'row',
      alignItems: 'center',
    },
    profile: {
      backgroundColor: 'white',
      width: height * 0.09,
      height: height * 0.09,
      marginLeft: 25,
    },
  });

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
      }}>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>My Feed</Text>
        </View>
        {true ? <LoadingPosts /> : <View />}
      </View>
      <TabMenu routes={routesApp} navigation={navigation} />
    </SafeAreaView>
  );
};
