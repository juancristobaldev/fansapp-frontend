import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {TabMenu} from '../../../../components/TabMenu';

import {routesUpload} from '../../routes';
export const VideoScreen = ({navigation}) => {
  return (
    <SafeAreaView     style={{
        backgroundColor: 'white',
        height: '100%',
      }}>
      <StatusBar />
      <View>
        <Text>Video</Text>
      </View>
      <TabMenu routes={routesUpload} navigation={navigation} />
    </SafeAreaView>
  );
};
