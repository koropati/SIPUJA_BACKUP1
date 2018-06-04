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
    Alert,
} from 'react-native';


import { Icon, Container, Content, Thumbnail, Header, Left, Body, Right, Button, List, ListItem, Card, CardItem, } from 'native-base'
import EntypoIcon from 'react-native-vector-icons/Entypo'

class detailAnggota extends Component {

    static navigationOptions = {
        title: 'Detail Anggota',
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
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: [],
            error: null,
            refreshing: false,
            ActivityIndicator_Loading: false,
        };
    }

    componentDidMount() {
        const { navigation } = this.props;
        const id = navigation.getParam('id', 'NO-ID')
        console.log(id)
        this.setState({ ActivityIndicator_Loading: true }, () => {
            this.setState({ refreshing: true });
            const url = 'http://dewoksatria.000webhostapp.com/sipuja/getAnggota.php?id=' + id;
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
                    <Card>
                        <CardItem style={{ backgroundColor: '#ecf0f1' }}>
                            <Left>
                                <Thumbnail source={{ uri: 'http://mhs.rey1024.com/appmobile/B1615051046/images/mhs.png' }} />
                                <Body>
                                    <Text style={{ fontWeight: 'bold' }}>{item.NamaAnggota}</Text>
                                    <Text note>{item.Id_Anggota}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Content>
                                <List>
                                    <ListItem icon>
                                        <Left>
                                            <Icon name="person" />
                                        </Left>
                                        <Body>
                                            <Text>{item.NamaAnggota}</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem icon>
                                        <Left>
                                            <Icon name="barcode" />
                                        </Left>
                                        <Body>
                                            <Text>{item.Id_Anggota}</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem icon>
                                        <Left>
                                            <Icon name="pricetag" />
                                        </Left>
                                        <Body>
                                            <Text>{item.JenisAnggota}</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem icon>
                                        <Left>
                                            <Icon name="home" />
                                        </Left>
                                        <Body>
                                            <Text>{item.Alamat}</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem icon>
                                        <Left>
                                            <Icon name="logo-whatsapp" />
                                        </Left>
                                        <Body>
                                            <Text>{item.Telepon}</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem icon>
                                        <Left>
                                            <Icon name="mail" />
                                        </Left>
                                        <Body>
                                            <Text>{item.Email}</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem icon>
                                        <Left>
                                            <Icon name="calendar" />
                                        </Left>
                                        <Body>
                                            <Text>{item.TanggalLahir}</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem icon>
                                        <Left>
                                            {item.JenisKelamin=="Laki-Laki"? <Icon name="male" />: <Icon name="female" />}
                                            
                                        </Left>
                                        <Body>
                                            <Text>{item.JenisKelamin}</Text>
                                        </Body>
                                    </ListItem>
                                </List>
                            </Content>

                        </CardItem>
                        <CardItem style={{ height: 45 }}>
                            <Left>
                                <Button iconLeft
                                    onPress={() => {
                                        /* 1. Navigate to the Details route with params */
                                        this.props.navigation.navigate('editAnggota', {
                                            Id_Anggota: item.Id_Anggota,
                                            username: item.username,
                                            nama: item.NamaAnggota,
                                            JenisKelamin: item.JenisKelamin,
                                            TanggalLahir: item.TanggalLahir,
                                            alamat: item.Alamat,
                                            Telepon: item.Telepon,
                                            email : item.Email,
                                            JenisAnggota: item.JenisAnggota
                                        });
                                    }}
                                    style={{ backgroundColor: '#2980b9', paddingLeft: 2, height: 30, width: 100, borderRadius: 7 }}>
                                    <Icon name='refresh' />
                                    <Text style={{ color: 'white', paddingRight: 10 }}>Edit</Text>

                                </Button>
                            </Left>
                            <Right>
                                <Button iconLeft onPress={() => Alert.alert(
                                    'Hapus Data',
                                    'Yakin Ingin menghapus ' + item.NamaAnggota + ' ?',
                                    [
                                        { text: 'Batal', onPress: () => console.log('Cancel ditekan'), style: 'cancel' },
                                        {
                                            text: 'OK', onPress: () => this.setState({ ActivityIndicator_Loading: true }, () => {
                                                fetch('http://dewoksatria.000webhostapp.com/sipuja/deleteAnggota.php',
                                                    {
                                                        method: 'POST',
                                                        headers:
                                                            {
                                                                'Accept': 'application/json',
                                                                'Content-Type': 'application/json',
                                                            },
                                                        body: JSON.stringify(
                                                            {
                                                                idAnggota: item.Id_Anggota,
                                                            })

                                                    }).then((response) => response.json()).then((responseJsonFromServer) => {
                                                        alert(responseJsonFromServer);
                                                        this.setState({ ActivityIndicator_Loading: false });

                                                    }).catch((error) => {
                                                        console.error(error);
                                                        this.setState({ ActivityIndicator_Loading: false });

                                                    });
                                            })
                                        },
                                    ],
                                    { cancelable: true }
                                )} style={{ backgroundColor: '#c0392b', paddingLeft: 2, height: 30, width: 100, borderRadius: 7 }}>
                                    <Icon name='trash' />
                                    <Text style={{ color: 'white', paddingRight: 10 }}>Hapus</Text>

                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                    }
                    keyExtractor={(item, index) => index.toString()}
                    />
                </Content>
            </Container>

        );
    }



}

export default detailAnggota;

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