import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Home from './HomeA'
import webKppn from '../Home/webKppn'

const fiturHomeA = StackNavigator({
    Home: { screen: Home },
    webKppn : {screen: webKppn},
}, {
        //header:null,
    }

);

export default fiturHomeA;