import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';



const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
            {
                backgroundColor: '#a6e4d0',
                image: <Image source={require('../assets/onboarding-img1.jpg')} />,
                title: 'Pratique Idiomas',
                subtitle: 'Descubra eventos, faça amigos e pratique idiomas',
            },
            {
                backgroundColor: '#fdeb93',
                image: <Image source={require('../assets/onboarding-img2.jpg')} />,
                title: 'Eventos',
                subtitle: 'Receba notificações dos eventos do Clube Poliglota',
            },
        ]}
        />
    )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})