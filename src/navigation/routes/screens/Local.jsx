import {StyleSheet, Text} from 'react-native';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {TabMenu} from '../../../components/TabMenu';
import {routesApp} from '../../routes/routes';
import * as sizes from '../../../constants/sizes';

export const Local = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
      }}>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Local</Text>
        </View>
      </View>
      <TabMenu routes={routesApp} navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
});
