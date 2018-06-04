import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ActivityIndicator,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView, 
    ScrollView
} from 'react-native';

import { Icon, Container, Content, Thumbnail, Header, Left, Body, Right, Button } from 'native-base'
import EntypoIcon from 'react-native-vector-icons/Entypo'

class Splash extends Component {

    render() {

        return (
            <View style={styles.wrapper}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={{ uri: 'https://image.ibb.co/ipmm3n/logoAPP2.png' }}
                    />
                    <Text style={styles.title}>Sistem Perpustakan KPPN Singaraja</Text>
                </View>

                <View>
                    <Text style={styles.subtitle}>Sistem Perpustakaan Create By Dewok</Text>
                </View>
            </View>


        );
    }



}

export default Splash;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#1ABC9C',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subtitle: {
        color: 'white',
        //fontWeight: 'lighter',
        paddingBottom: 20,
    },
    logo: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    titleWrapper: {
        flex: 1,
        justifyContent: 'center',
    }
});