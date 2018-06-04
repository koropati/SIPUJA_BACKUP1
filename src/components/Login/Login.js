import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ActivityIndicator,
    TouchableOpacity,
    Image,
    StatusBar,
    KeyboardAvoidingView,
    ScrollView,
    AsyncStorage,
    Keyboard,
    Alert,
} from 'react-native';

import { Icon, Container, Content, Thumbnail, Header, Left, Body, Right, Button } from 'native-base'
import EntypoIcon from 'react-native-vector-icons/Entypo'

var md5 = require('md5');
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            hidePassword: true,
            sesiLogin:false,
        }
    }
    managePasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }

    componentDidMount() {
        
      }

      sesiLogin= async () => {
          try{
            let user = await AsyncStorage.getItem('user');
            let typeUser = await AsyncStorage.getItem('tipeUser');
            if(user!=null){
                if(typeUser=='petugas'){
                    this.props.navigation.navigate('MainApp', {
                        username: user,
                    })
                }
                else if(typeUser=='anggota'){
                    this.props.navigation.navigate('MainAppAnggota', {
                        username: user,
                    })
                }
            }
          }
          catch(error){

          }

      }
      showData= async () => {
        let user=this.state.username;
        AsyncStorage.setItem('user', user);
        AsyncStorage.setItem('typeUser', 'Petugas');
        try{
            let user = await AsyncStorage.getItem('user');
            let type = await AsyncStorage.getItem('typeUser');
            if(type!=null){
               
                    alert(type);
               
            }
          }
          catch(error){
            alert(error);
          }
      }


    render() {

        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={{ uri: 'https://image.ibb.co/ipmm3n/logoAPP2.png' }}
                    />
                    
                    <Text style={styles.titleLogo}>Login</Text>
                    <Text style={styles.title}>Sistem Perpustakan KPPN Singaraja</Text>
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.containerForm}>
                        <StatusBar
                            barStyle="light-content"
                        />

                        <TextInput
                            placeholder="Username or email"
                            onChangeText={(username) => this.setState({ username })}
                            placeholderTextColor="rgba(255,255,255,0.7)"
                            underlineColorAndroid="transparent"
                            returnKeyType="next"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autocorrect={false}
                            style={styles.input}
                        />
                        <View>
                        <TextInput
                            placeholder="Password"
                            onChangeText={(password) => this.setState({ password })}
                            placeholderTextColor="rgba(255,255,255,0.7)"
                            underlineColorAndroid="transparent"
                            returnKeyType="go"
                            secureTextEntry = { this.state.hidePassword }
                            style={styles.input}
                            ref={(input) => this.passwordInput = input}
                            

                        />
                        <TouchableOpacity activeOpacity={0.8} style={styles.visibilityBtn} onPress={this.managePasswordVisibility}>
                            <Image source={(this.state.hidePassword) ? require('../../images/logo/private.png') : require('../../images/logo/eye.png')} style={styles.btnImage} />
                        </TouchableOpacity>
                        
                        </View>
                        
                        <TouchableOpacity style={styles.buttonContainer} onPress={this.Login}>
                            <Text style={styles.buttonText}>
                                LOGIN
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainerGuest} onPress={() => this.props.navigation.navigate('MainAppAnggota2')}>
                            <Text style={styles.buttonText}>
                                GUEST LOGIN
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </KeyboardAvoidingView>


        );
    }

    Login = () => {
       
            //alert('test');
        //https://dewoksatria.000webhostapp.com/eHealty/cekLogin.php
        fetch('https://dewoksatria.000webhostapp.com/sipuja/login.php', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: (md5(this.state.password))
            })

        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson == "OK_Petugas") {

                    this.props.navigation.navigate('MainApp', {
                        username: this.state.username,
                    })
                    let user=this.state.username;
                    AsyncStorage.setItem('user', user);
                    AsyncStorage.setItem('tipeUser', 'petugas');
                }
                else if (responseJson == "OK_Anggota") {

                    this.props.navigation.navigate('MainAppAnggota', {
                        username: this.state.username,
                    })
                    let user=this.state.username;
                    AsyncStorage.setItem('user', user);
                    AsyncStorage.setItem('tipeUser', 'anggota');
                }
                else {
                    alert(responseJson);
                }
            })
            .catch((error) => {
                //console.error(error);
                Alert.alert('Pesan Server','Aku Lagi Istirahat!');
            });  
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1ABC9C',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    containerForm: {
        padding: 20,
    },
    formContainer: {

    },
    logo: {
        width: 100,
        height: 100,
    },
    titleLogo: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
    },
    title: {
        color: '#FFF',
        marginTop: 5,
        width: 200,
        textAlign: 'center',
        opacity: 0.9,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#FFF',
        borderRadius: 7,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        backgroundColor: '#16A085',
        borderRadius: 7,
        paddingVertical: 15,

    },
    buttonContainerGuest:
    {
        marginTop: 10,
        backgroundColor: '#6C7A89',
        borderRadius: 7,
        paddingVertical: 15,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
    },
    visibilityBtn:
        {
            position: 'absolute',
            right: 3,
            height: 40,
            width: 35,
            padding: 5
        },

    btnImage:
        {
            resizeMode: 'contain',
            height: '100%',
            width: '100%'
        },
    

});