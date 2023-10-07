import {createStackNavigator} from '@react-navigation/stack';
import {useState} from 'react';
import { Feed } from '../routes/screens/Feed';
import { Local } from '../routes/screens/Local';
import { Profile } from '../routes/screens/Profile';
import { Settings } from '../routes/screens/Settings';


import {StackUpload} from './StackUpload';

const Stack = createStackNavigator();

export const StackLoggedin = () => {
  const [upload, setUpload] = useState(false);

  const routes = [
    {name: 'feed', component: Feed},
    {name: 'local', component: Local},
    {name: 'settings', component: Settings},
    {name: 'profile', component: Profile},
    {name: 'stack-upload', component: StackUpload},
  ];

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
