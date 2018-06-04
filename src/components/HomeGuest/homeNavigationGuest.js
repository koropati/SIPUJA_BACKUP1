import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

import { DrawerNavigator, DrawerItems, NavigationAction } from 'react-navigation';
import HomeG from './fiturHomeGuest'
import ProfileG from './ProfileGuest'
import { Container, Content, Header, Body, Icon } from 'native-base';

const CustomDrawerContentComponent = (props) => (
    <Container>
        <Header style={{height: 200, backgroundColor: '#1ABC9C',}}>
            <Body style={{justifyContent: 'center', alignItems: 'center', }}>
                <Image
                    style={styles.drawerImage}
                    source={require('../../../src/images/logo/logoSipuja.png')}/>
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props}/>
        </Content>
    </Container>

)
 
const homeNavigationGuest = DrawerNavigator({
    Home: { screen: HomeG },
    Profile: { screen: ProfileG },
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

export default homeNavigationGuest;

const styles = StyleSheet.create({
    drawerImage:{
        height: 150,
        width: 150,
        borderRadius: 75,

    }
})
