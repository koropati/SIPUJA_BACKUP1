import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Home from './HomeGuest'
import webKppn from '../Home/webKppn'

const fiturHomeGuest = StackNavigator({
    Home: { screen: Home },
    webKppn : {screen: webKppn},
}, {
        
    }

);

export default fiturHomeGuest;