import { createStackNavigator } from '@react-navigation/stack';

const {Lobby} = require('../../components/auth/Lobby');
const {SignIn} = require('../../components/auth/SignIn');
const {SignUp} = require('../../components/auth/SignUp');

const Stack = createStackNavigator();

export const StackUnLoggedin = () => {
  const routes = [
    {name: 'lobby', component: Lobby},
    {name: 'sign-in', component: SignIn},
    {name: 'sign-up', component: SignUp},
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
