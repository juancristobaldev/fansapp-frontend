import {createStackNavigator} from '@react-navigation/stack';
import {AudioScreen} from '../routes/screens/upload/AudioScreen';
import {FileScreen} from '../routes/screens/upload/FileScreen';
import {ImageScreen} from '../routes/screens/upload/ImageScreen';
import {VideoScreen} from '../routes/screens/upload/VideoScreen';

export const StackUpload = () => {
  const routes = [
    {name: 'image&video', component: ImageScreen},
    {name: 'audio', component: AudioScreen},
    {name: 'file', component: FileScreen},
  ];

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {routes.map((item, index) => (
        <Stack.Screen
          key={index}
          options={{
            animationEnabled: false,
          }}
          component={item.component}
          name={item.name}
        />
      ))}
    </Stack.Navigator>
  );
};
