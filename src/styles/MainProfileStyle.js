import {Dimensions, StyleSheet} from 'react-native';

import * as sizes from '../constants/sizes';

const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  frontPage: {
    backgroundColor: '#F5F5F5',
    height: height * 0.2,
  },
  frontContainer: {
    position: 'relative',
    top: -20,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  circle: {
    position: 'relative',
    left: 20,
    top: -(width * 0.3) / 2,
  },
  out: {
    borderRadius: (width * 0.3) / 2,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    width: width * 0.3,
    height: width * 0.3,
    zIndex: 0,
  },
  in: {
    borderRadius: (width * 0.275) / 2,
    position: 'absolute',
    top: (width * 0.3 - width * 0.275) / 2,
    left: (width * 0.3 - width * 0.275) / 2,
    backgroundColor: '#F5F5F5',
    width: width * 0.275,
    height: width * 0.275,
    zIndex: 1,
  },
  container: {paddingHorizontal: 20},
  name: {
    borderRadius: 5,
    marginTop: (width * 0.3) / 2 + 20,
    backgroundColor: '#F5F5F5',
    height: sizes.mediumBigFont,
    width: width * 0.4,
    marginBottom: 10,
  },
  description: {
    borderRadius: 5,
    backgroundColor: '#F5F5F5',
    height: sizes.smallFont,
    width: '100%',
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#F5F5F5',
    height: 50,
    marginBottom: 20,
    width: '100%',
  },
  containerStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    borderRadius: 5,
    backgroundColor: '#F5F5F5',
    height: sizes.mediumFont,
    width: 25,
    marginRight: 10,
  },
  stats: {
    backgroundColor: '#F5F5F5',
    width: 25,
    height: sizes.mediumFont,
    borderRadius: 5,
  },
});
