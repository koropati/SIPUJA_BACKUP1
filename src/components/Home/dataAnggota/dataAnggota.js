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
    RefreshControl,
    FlatList,
} from 'react-native';

import { Icon, Container, Content, Thumbnail, Header, Left, Body, Right, Button, List, ListItem, Card, CardItem, } from 'native-base'
import EntypoIcon from 'react-native-vector-icons/Entypo'
class dataAnggota extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            error: null,
            refreshing: false,
            ActivityIndicator_Loading: false,
        };
    }
    componentDidMount() {
        this.setState({ ActivityIndicator_Loading: true }, () => {
            this.setState({ refreshing: true });
            const url = 'http://dewoksatria.000webhostapp.com/sipuja/lihatSemuaAnggota.php';
            //this.setState({ loading: true });
            fetch(url)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log("comp");
                    console.log(responseJson);
                    this.setState({
                        data: responseJson,
                        error: responseJson.error || null,
                        loading: false,
                        refreshing: false,
                        ActivityIndicator_Loading: false,

                    });
                }
                );
        });
    }
    static navigationOptions = {
        title: 'Data Anggota',
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

            <Container style={{ flex: 1, backgroundColor: '#1ABC9C', }}>
                <Content contentContainerStyle={{}}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.componentDidMount.bind(this)}
                        />
                    }
                >
                    <FlatList
                        data={this.state.data}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item }) =>
                            //onPress={() => this.props.navigation.navigate('Edit', { itemId: item.nomor })}
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('detailAnggota', { id: item.Id_Anggota })}>
                                <Card>
                                    <CardItem style={{ backgroundColor: '#ecf0f1' }}>
                                        <Left>
                                            <Thumbnail source={{ uri: 'http://mhs.rey1024.com/appmobile/B1615051046/images/mhs.png' }} />
                                            <Body>
                                                <Text style={{ fontWeight: 'bold' }}>{item.NamaAnggota}</Text>
                                                <Text note>{item.Id_Anggota}</Text>
                                                <Text note>{item.JenisAnggota}</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Content>
                                            <List>

                                                <ListItem icon>
                                                    <Left>
                                                        <Icon name="logo-whatsapp" />
                                                    </Left>
                                                    <Body>
                                                        <Text>{item.Telepon}</Text>
                                                    </Body>
                                                </ListItem>

                                            </List>
                                        </Content>

                                    </CardItem>

                                </Card>
                            </TouchableOpacity>
                        }
                        keyExtractor={(item, index) => index.toString()}
                        
                    />

                </Content>
            </Container>

        );
    }
}
 _keyExtractor = (item, index) => index.toString();

export default dataAnggota;

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