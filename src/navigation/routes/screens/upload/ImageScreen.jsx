import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import {CreatePost} from './ImageScreen/CreatePost';
import {LocationScreen} from './ImageScreen/LocationScreen';

export const ImageScreen = ({navigation}) => {
  const Stack = createStackNavigator();

  const routes = [
    {name: 'create-post', component: CreatePost},
    {name: 'set-location', component: LocationScreen},
  ];

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {routes.map((route, index) => (
        <Stack.Screen
          key={index}
          options={{
            animationEnabled: false,
          }}
          component={route.component}
          name={route.name}
        />
      ))}
    </Stack.Navigator>
  );
};
