import { View, Text } from 'react-native';
import React from 'react';
import {Link} from "expo-router";

const SignUp = ()=> {
    return (
        <View>
            <Text>SingUp</Text>
            <Link href={"/(auth)/sing_in"}>Sign Up</Link>
        </View>
    );
}
export default SignUp