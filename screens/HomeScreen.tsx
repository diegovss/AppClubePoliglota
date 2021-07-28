import React from 'react';
import { useContext } from 'react';
import { StyleSheet, Text, View, ViewBase } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

const HomeScreen = () => {
    const {user} = useContext(AuthContext);

    return (
        <View style={styles.container} >
            <Text style={styles.text} >Welcome {user.uid}</Text>
            <FormButton buttonTitle='Logout' onPress={() => {}} />
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: '#333333'
    }
});