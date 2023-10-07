import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation, useRoute} from '@react-navigation/native';

import {useEffect, useState} from 'react';

import {Dimensions} from 'react-native';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const {height, width} = Dimensions.get('screen');

const widthIcon = width * 0.07;
const heightTab = 75;

export const TabMenu = ({navigation, routes, father}) => {
  const routesInStack = navigation.getState().routeNames;
  const route = useRoute();
  const [state, setState] = useState([]);

  useEffect(() => {
    setState(routes);
  }, [routes]);

  console.log(routesInStack);

  const [routeSelected, setRouteSelected] = useState(route.name);

  if (state.length)
    return (
      <View style={styles.safe}>
        <View style={styles.iconsContainer}>
          {state.map((route, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(route.name)}
              key={index}>
              <FontAwesomeIcon
                color={
                  routeSelected === route.name ||
                  routeSelected === route.subName
                    ? 'black'
                    : 'gray'
                }
                size={widthIcon}
                icon={route.icon}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  safe: {
    position: 'relative',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    height: 75 - 20,
    width: width,
  },
  iconsContainer: {
    position: 'absolute',
    top: -40,
    padding: 20,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {height: 0.25},
    shadowOpacity: 0.1,
    width: width - 40,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    borderRadius: 7.5,
  },
});
