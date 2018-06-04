import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import { StackNavigator, NavigationAction } from 'react-navigation';
import Login from './components/Login/Login' //komen kalo server sleep
//import Login from './components/homeNavigation'
import Home from './components/homeNavigation'
import HomeA from './components/HomeAnggota/homeNavigationAnggota'
import HomeG from './components/HomeGuest/homeNavigationGuest'
const Aplication = StackNavigator({
    Home: { screen: Login }, //gantiJadi Home dll kalo Server lagi sleep
    MainApp : { screen: Home},
    MainAppAnggota : { screen: HomeA},
    MainAppAnggota2 : { screen: HomeG},
}, {
        initialRouteName: 'Home',
        navigationOptions: {
            header: null,
        }
    }
 
);

export default class Main extends React.Component {
    render(){
        return(
            <Aplication/>
        );
    }
}
