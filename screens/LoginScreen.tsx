import { NavigationContainer, useScrollToTop } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TouchableOpacity, Image, ScrollView, Alert, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image 
                source={require('../assets/rn-social-logo.png')}
                style={styles.logo}
            />
            <Text style={styles.text} >RN Social App</Text>
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />
            <FormButton 
                buttonTitle="Sign In"
                onPress={() => Alert.alert('Sign in Clicked!')}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
                <Text style={styles.navButton}>Forgot Password?</Text>
            </TouchableOpacity>

            <SocialButton 
                buttonTitle="Sign In with Facebook"
                btnType="facebook"
                color="#1564aa"
                backgroundColor="#e6eaf4"
                onPress={() => {}}
            />

            <SocialButton 
                buttonTitle="Sign In with Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => {}}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.navButton}>Don't have an account? Create here</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
      },
      logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
      },
      text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
      },
      navButton: {
        marginTop: 15,
      },
      forgotButton: {
        marginVertical: 35,
      },
      navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
      },
})