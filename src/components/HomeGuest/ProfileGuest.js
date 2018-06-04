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

class ProfileGuest extends Component {

    static navigationOptions = {
        header: false,
        drawerIcon: (
            <Image source={require('../../images/logo/user.png')}
                style={{ height: 24, width: 24 }} />
        ),
        header: false,
    }

    render() {

        return (
            <ImageBackground
                source={require('../../images/bg/1.jpg')}
                style={styles.container}
            >
                <View style={styles.overlayContainer}>

                    <Header style={{ height: 70, backgroundColor: '#009688' }}>

                        <Left style={{}}>
                            <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                                <Image source={require('../../images/logo/logoAPP2.png')} style={{ height: 50, width: 50, resizeMode: Image.resizeMode.contain, padding: 10, marginTop: 10, }} />
                                <Text style={{ color: '#FFF', fontWeight: 'bold', marginBottom: 10, }}>SIPUJA</Text>
                            </Button>
                        </Left>

                        <Right style={{}}>
                            <Button transparent onPress={() => this.props.navigation.navigate('webKppn')}>
                                <Text style={{ color: '#FFF', marginRight: 5, fontWeight: 'bold' }}>Log Out</Text>
                                <Icon name="md-log-out" style={{ paddingRight: 10, fontSize: 32, color: '#FFF' }}>
                                </Icon>
                            </Button>
                        </Right>


                    </Header>
                    
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text>Hello</Text>
                        </View>
                    


                </View>

            </ImageBackground>
        );
    }



}

export default ProfileGuest;

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