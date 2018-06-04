import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ActivityIndicator,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    ImageBackground,
} from 'react-native';


import { Icon, Container, Content, Thumbnail, Header, Left, Body, Right, Button } from 'native-base'
import EntypoIcon from 'react-native-vector-icons/Entypo'

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';



class inputKembali extends Component {

    static navigationOptions = {
        title: 'Input Data Pengembalian',
        headerStyle: {
            backgroundColor: '#009688',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        titleStyle: {
            textAlign: 'center',
        },

    };
    constructor() {
        super();
        this.state = {
            idPeminjam: '',
            idBuku1: '',
            idBuku2: '',
            idBuku3: '',
            ActivityIndicator_Loading: false,
        }
    }
    

    render() {
        return (

            <Container style={{ flex: 1 }}>
                <Content contentContainerStyle={{
                    flex: 1,
                    backgroundColor: '#1ABC9C',
                }}>
                    <View style={styles.MainContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                placeholder="ID Anggota Peminjam"
                                style={styles.TextInputStyleClass}
                                underlineColorAndroid="transparent"
                                onChangeText={(TextInputText) => this.setState({ idPeminjam: TextInputText })}
                                keyboardType='numeric'
                                ref={input => { this.idPeminjam = input }} />
                            <TouchableOpacity
                                activeOpacity={0.5}
                                style={styles.TouchableOpacityStyle}>
                                <Text style={styles.TextStyle}>SCAN QR</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ backgroundColor: '#A3E4D7', marginRight: 2, marginLeft: 2, borderRadius: 7, }}>
                            <Text style={{ marginLeft: 10, color: '#00877B', fontWeight: 'bold', marginTop: 10, }}>DATA BUKU PINJAM: </Text>
                            <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 5, marginRight: 15, }}>
                                <TextInput
                                    placeholder="ID Buku /ISBN"
                                    style={styles.TextInputStyleClass}
                                    underlineColorAndroid="transparent"
                                    onChangeText={(TextInputText) => this.setState({ idBuku1: TextInputText })}
                                    keyboardType='numeric'
                                    ref={input => { this.idBuku1 = input }} />
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    style={styles.TouchableOpacityStyle}>
                                    <Text style={styles.TextStyle}>SCAN QR</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 5, marginRight: 15, }}>
                                <TextInput
                                    placeholder="ID Buku /ISBN"
                                    style={styles.TextInputStyleClass}
                                    underlineColorAndroid="transparent"
                                    onChangeText={(TextInputText) => this.setState({ idBuku2: TextInputText })}
                                    keyboardType='numeric'
                                    ref={input => { this.idBuku2 = input }} />
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    style={styles.TouchableOpacityStyle}>
                                    <Text style={styles.TextStyle}>SCAN QR</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 5, marginRight: 15, }}>
                                <TextInput
                                    placeholder="ID Buku /ISBN"
                                    style={styles.TextInputStyleClass}
                                    underlineColorAndroid="transparent"
                                    onChangeText={(TextInputText) => this.setState({ idBuku3: TextInputText })}
                                    keyboardType='numeric'
                                    ref={input => { this.idBuku3 = input }} />
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    style={styles.TouchableOpacityStyle}>
                                    <Text style={styles.TextStyle}>SCAN QR</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                       
                    </View>
                    <TouchableOpacity
                            activeOpacity={0.5}
                            style={styles.TouchableOpacitySubmitStyle}>
                            <Text style={styles.TextStyle}>Tambah Data Pengembalian</Text>
                        </TouchableOpacity>
                </Content>
            </Container>

        );
    }



}

export default inputKembali;

const styles = StyleSheet.create({
    MainContainer:
        {
            flex: 1,
            //justifyContent: 'center',
            margin: 20
        },
    TouchableOpacityStyle:
        {
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 7,
            backgroundColor: '#16A085',
            borderWidth: 1,
            borderColor: '#FFF',
            marginBottom: 20,
            marginLeft: 10,
            height: 40,
            width: '30%'
        },
    TouchableOpacitySubmitStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 7,
        backgroundColor: '#16A085',
        borderWidth: 1,
        borderColor: '#FFF',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        //width: '100%'
    },
    TextInputStyleClass:
        {
            textAlign: 'center',
            height: 40,
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: '#16A085',
            borderRadius: 7,
            marginBottom: 10,
            width: '70%'
        },
    TextStyle:
        {
            color: '#fff',
            textAlign: 'center',
            fontSize: 18
        },
});