import {
  StatusBar,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { Input } from '../generals/Input';
import { ButtonTrip } from '../generals/ButtonTrip';
import { Button } from '@rneui/base';
import { useFormik } from 'formik';

import * as sizes from '../../constants/sizes';
import * as themes from '../../constants/theme';
import * as icons from '@fortawesome/free-solid-svg-icons';
import * as Yup from 'yup';

import * as iconBrands from '@fortawesome/free-brands-svg-icons';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { ContinueWithFacebook } from './components/ContinueWithFacebook';
import { ContinueWithGoogle } from './components/ContinueWithGoogle';

export const SignUp = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { values, errors, setFieldValue, setErrors, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(5, 'Name is too short. Provide other more large')
        .max(30, 'Name is too large. Max 30 letters')
        .required('Name is required'),
      email: Yup.string()
        .email('Enter a valid email')
        .max(60, 'Email is too large. Max 60 letters')
        .required('Email is required'),
      password: Yup.string()
        .min(5, 'Password is too short. Provide other more large')
        .max(30, 'Password is too large. Max 30 letters')
        .required('The password is required'),
      repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Please confirm your password'),
    }),
    onSubmit: async values => {
      let newValues = { ...values };
      delete newValues.repeatPassword;

      setIsLoading(true);

      const response = await axios.post(
        'http://localhost:3000/create-user',
        newValues,
      );

      if (response.status === 200) {
        setIsLoading(false);
        navigation.navigate('sign-in');
      } else {
        console.log(response);
      }
    },
  });

  const inputs = [
    {
      name: 'name',
      placeholder: 'Name',
      icon: icons.faUser,
    },
    {
      name: 'email',
      placeholder: 'Email',
      icon: icons.faEnvelope,
    },
    {
      name: 'password',
      placeholder: 'Password',
      icon: icons.faLock,
    },
    {
      name: 'repeatPassword',
      placeholder: 'Repeat your password',
      icon: icons.faLock,
    },
  ];

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        height: '100%',
      }}>
      <StatusBar />
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 30,
        }}>
        <Text style={styles.h1}>Sign Up</Text>
        <Text style={styles.subTitle}>
          Join us and patrocine your favorite content creators.
        </Text>
        <ScrollView
          style={{
            height: 250,
          }}>
          {inputs.map((input, key) => (
            <Input
              key={key}
              marginBottom={errors[input.name] ? 7.5 : 20}
              iconLeft={input.icon}
              placeholder={input.placeholder}
              onChange={text => setFieldValue(input.name, text)}
              error={errors[input.name]}
              secureTextEntry={
                input.name === 'password' || input.name === 'repeatPassword'
                  ? true
                  : false
              }
            />
          ))}
        </ScrollView>
        <View style={{ backgroundColor: 'white', paddingTop: 20 }}>
          <ButtonTrip
            loading={isLoading}
            primaryColor={themes.PRIMARY_COLOR}
            secondaryColor={'black'}
            colorTitle="white"
            title="Continue"
            onPress={() => handleSubmit()}
          />
          <Text style={styles.or}>Or continue with social media</Text>
          <ContinueWithFacebook />
          <ContinueWithGoogle />
          <Text style={styles.or}>Do you have a account?</Text>
          <ButtonTrip
            primaryColor={'black'}
            title="Sign in"
            colorTitle="white"
            secondaryColor={themes.PRIMARY_COLOR}
            onPress={() => navigation.navigate('sign-in')}
          />
        </View>
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
