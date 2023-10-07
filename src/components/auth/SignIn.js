import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Input} from '../generals/Input';
import {ButtonTrip} from '../generals/ButtonTrip';
import {useFormik} from 'formik';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import {useState} from 'react';

import * as icons from '@fortawesome/free-solid-svg-icons';
import * as sizes from '../../constants/sizes';
import * as themes from '../../constants/theme';
import * as Yup from 'yup';

import {ContinueWithFacebook} from './components/ContinueWithFacebook';
import {ContinueWithGoogle} from './components/ContinueWithGoogle';

// import AsyncStorage from '@react-native-async-storage/async-storage';

export const SignIn = ({navigation}) => {
  const [errorForm, setErrorForm] = useState(false);

  const {setFieldValue, values, errors, handleSubmit} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Enter a valid email')
        .required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async values => {
      const response = await axios
        .post('http://localhost:3000/sign-in', values)
        .catch(error => console.log(error));

      const {success, data} = response.data,
        token = data.token;

      if (success) {
        AsyncStorage.setItem('@token', token);
        RNRestart.Restart();
      } else {
        setErrorForm(response.data.error);
      }
    },
  });

  const inputs = [
    {name: 'email', placeholder: 'Email', icon: icons.faEnvelope},
    {name: 'password', placeholder: 'Password', icon: icons.faLock},
  ];

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        height: '100%',
      }}>
      <StatusBar />
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 80,
        }}>
        <Text style={styles.h1}>Sign In</Text>
        <Text style={styles.subTitle}>
          Complete the form to continue and access your account.
        </Text>
        {inputs.map((input, key) => (
          <Input
            error={errors[input.name]}
            key={key}
            marginBottom={
              errors[input.name] ? 7.5 : errorForm && key === 1 ? 7.5 : 20
            }
            marginBottomError={10}
            placeholder={input.placeholder}
            iconLeft={input.icon}
            onChange={text => setFieldValue(input.name, text)}
            secureTextEntry={input.name === 'password' ? true : false}
          />
        ))}
        {errorForm && (
          <Text
            style={{
              fontSize: sizes.verySmallFont,
              color: 'red',
              marginBottom: 10,
            }}>
            {errorForm}
          </Text>
        )}
        <ButtonTrip
          onPress={() => handleSubmit()}
          primaryColor={themes.PRIMARY_COLOR}
          secondaryColor={'black'}
          colorTitle={'white'}
          title={'Continue'}
        />
        <Text style={styles.or}>Or continue with social media</Text>
        <ContinueWithFacebook />
        <ContinueWithGoogle />
        <Text style={styles.or}>Do you not have a account?</Text>
        <ButtonTrip
          onPress={() => navigation.navigate('sign-up')}
          title={'Create account'}
          primaryColor={'black'}
          secondaryColor={themes.PRIMARY_COLOR}
          colorTitle={'white'}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: sizes.bigSize,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  subTitle: {
    fontSize: sizes.smallFont,
    fontWeight: '300',
    marginBottom: 20,
  },
  or: {
    fontSize: sizes.smallFont,
    textAlign: 'center',
    paddingBottom: 20,
  },
  titleButton: {
    fontSize: sizes.mediumFont,
  },
  input: {},
  buttonContinue: {
    backgroundColor: themes.PRIMARY_COLOR,
    marginBottom: 20,
    position: 'absolute',
    zIndex: 1,
  },
  buttonCreate: {
    backgroundColor: 'black',
  },
  buttonRRSS: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    color: 'black',
    marginBottom: 20,
  },
});
