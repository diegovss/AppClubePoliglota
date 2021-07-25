/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';


import Providers from './navigation';


const AppStack = createStackNavigator();

const App = () => {
    return <Providers/>
};

export default App;
