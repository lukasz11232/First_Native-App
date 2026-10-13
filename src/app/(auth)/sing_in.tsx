import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const SignIn = () => {
  return (
    <View>
      <Text>SingIn</Text>
      <Link href="/(auth)/sign_up">Sign In</Link>
    </View>
  );
};

export default SignIn;