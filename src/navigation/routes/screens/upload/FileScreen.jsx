import { Text } from "react-native"
import { SafeAreaView, StatusBar, View } from "react-native"

import {TabMenu} from '../../../../components/TabMenu';

import {routesUpload} from '../../routes';

export const FileScreen = ({navigation}) => {
    return(
        <SafeAreaView
        style={{
          backgroundColor: 'white',
        }}>
        <StatusBar />
        <View style={{
            height:'100%'
        }}>
          <View >
            <Text >File</Text>
          </View>
        </View>
        <TabMenu routes={routesUpload} navigation={navigation} />
      </SafeAreaView>
    )
}