import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import cariBuku from './cariBuku'

import dataAnggota from './dataAnggota/dataAnggota'
import detailAnggota from './dataAnggota/detailAnggota'
import editAnggota from './dataAnggota/editAnggota'

import dataBuku from './dataBuku/dataBuku'

import dataPinjam from './dataPinjam'
import Home from './Home'
import inputBuku from './inputBuku'
import inputKembali from './inputKembali'
import inputPinjam from './inputPinjam'
import tambahAnggota from './tambahAnggota'
import webKppn from './webKppn'

const fiturHome = StackNavigator({
    Home: { screen: Home },
    cariBuku : { screen: cariBuku},
    
    dataAnggota : { screen: dataAnggota},
    detailAnggota : { screen: detailAnggota},
    editAnggota : { screen: editAnggota},

    dataBuku : { screen: dataBuku},
    dataPinjam : { screen: dataPinjam},
    inputBuku : { screen: inputBuku},
    inputKembali : {screen: inputKembali},
    inputPinjam : {screen: inputPinjam},
    tambahAnggota : {screen: tambahAnggota},
    webKppn : {screen: webKppn},
}, {
    navigationOptions: {
        //header: null,
    }
    }

);

export default fiturHome;