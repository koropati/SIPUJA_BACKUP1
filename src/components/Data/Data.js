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

class Data extends Component {

    render() {

        return (
            <View style={styles.wrapper}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={{ uri: 'https://image.ibb.co/i4mGYc/icon_Heart_Beat.png' }}
                    />
                    <Text style={styles.title}>Halaman Data</Text>
                </View>

                <View>
                    <Text style={styles.subtitle}>Monitor the health of loved ones remotely</Text>
                </View>
            </View>


        );
    }



}

export default Data;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#ffb8b8',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
    },
    subtitle: {
        color: 'white',
        fontWeight: 'lighter',
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