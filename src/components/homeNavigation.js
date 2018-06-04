import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
  
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import Home from './Home/fiturHome'
import Profile from './Profile/Profile'
import { Container, Content, Header, Body, Icon } from 'native-base';

const CustomDrawerContentComponent = (props) => (
    <Container>
        <Header style={{height: 200, backgroundColor: '#1ABC9C',}}>
            <Body style={{justifyContent: 'center', alignItems: 'center', }}>
                <Image
                    style={styles.drawerImage}
                    source={require('../../src/images/logo/logoSipuja.png')}/>
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props}/>
        </Content>
    </Container>

)

const homeNavigation = DrawerNavigator({
    Home: { screen: Home },
    Profile: { screen: Profile },
}, {
        initialRouteName: 'Home',
        contentComponent:CustomDrawerContentComponent,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        navigationOptions: {
            header: null,
        }
    }

);

export default homeNavigation;

const styles = StyleSheet.create({
    drawerImage:{
        height: 150,
        width: 150,
        borderRadius: 75,

    }
})
