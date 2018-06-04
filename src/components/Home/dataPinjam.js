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

class dataPinjam extends Component {

    static navigationOptions = {
        title: 'Data Pinjam',
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

    render() {
        return (

            <Container>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#1ABC9C',
                }}>
                    <Text>Data Pinjam</Text>
                </Content>
            </Container>

        );
    }



}

export default dataPinjam;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#ffb8b8',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlayContainer: {
        flex: 1,
        backgroundColor: 'rgba(26,188,156, .4)',
    },
    top: {
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        color: '#FFF',
        fontSize: 28,
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: '#009688'
    },
    bottom: {
        height: '45%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
    },
    bottomItem: {
        width: '50%',
        height: '50%',
        padding: 5,
    },
    bottomItemLeft: {
        width: '65%',
        height: '50%',
        padding: 5,
    },
    bottomItemRight: {
        width: '35%',
        height: '50%',
        padding: 5,
    },
    bottomItemInner: {
        flex: 1,
    },
    judulMenu: {
        color: '#FFF',
        marginTop: 10,
        marginRight: 20,
        fontSize: 22,
        fontWeight: 'bold',
    }
});