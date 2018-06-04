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
import { Dropdown } from 'react-native-material-dropdown';
import { Picker } from 'react-native-picker-dropdown'
let data = [{
    value: '000', label: 'Publikasi Umum, informasi umum dan komputer'
}, {
    value: '100', label: 'Filsafat dan psikologi'
}, {
    value: '200', label: 'Agama'
}, {
    value: '300', label: 'Ilmu sosial, sosiologi dan antropologi'
}, {
    value: '400', label: 'Bahasa'
},
{
    value: '500', label: 'Sains'
},
{
    value: '600', label: 'Teknologi'
},
{
    value: '700', label: 'Kesenian dan rekreasi'
},
{
    value: '800', label: 'Literatur, Sastra, Retorika dan Kritik'
},
{
    value: '900', label: 'Sejarah'
},
];
class cariBuku extends Component {

    static navigationOptions = {
        title: 'Data Buku',
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
        //header: null,

    };

    constructor() {
        super();
        this.state = {
            valueCari: '',
            jenisBuku: '',
            loading: false,
            data: [],
            error: null,
            refreshing: false,
            ActivityIndicator_Loading: false,
            tombolCari_ditekan: false,
        }
    }
    cariDataMhs = () => {
        if ((this.state.valueCari == '') && (this.state.jenisBuku == '')) {
            alert('Pencarian Kosong !')
        }
        else {
            this.setState({ ActivityIndicator_Loading: true }, () => {
                this.setState({ refreshing: true });
                fetch('http://dewoksatria.000webhostapp.com/sipuja/cariBuku.php',
                    {
                        method: 'POST',
                        headers:
                            {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                        body: JSON.stringify(
                            {
                                valueCari: this.state.valueCari,
                                jenisBuku: this.state.jenisBuku,
                            })

                    })
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
            this.valueCari.clear()

        }


    }

    componentDidMount() {
        this.setState({ ActivityIndicator_Loading: true }, () => {
            this.setState({ refreshing: true });
            const url = 'http://dewoksatria.000webhostapp.com/sipuja/lihatSemuaBuku.php';
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
            <View style={{height: 160}}>
                <Card style={{ height: 100}}>
                        <CardItem style={{paddingTop: 10,}}>
                            <View style={{flexDirection: 'row'}}>
                            <TextInput style={{
                                textAlign: 'center',
                                height: 40,
                                backgroundColor: "#fff",
                                borderWidth: 1,
                                borderColor: '#2980b9',
                                borderRadius: 7,
                                marginBottom: 10,
                                width: '80%'
                            }}
                                placeholder="Masukkan Keyword"
                                underlineColorAndroid="transparent"
                                onChangeText={(TextInputText) => this.setState({ valueCari: TextInputText })}
                                ref={input => { this.valueCari = input }}
                            />
                            <TouchableOpacity
                                activeOpacity={0.5}
                                style={styles.TouchableOpacityStyle}
                                onPress={this.cariDataMhs}
                            >
                                <Text style={{color: '#FFF'}}>Cari</Text>
                            </TouchableOpacity>
                            </View>
                        </CardItem>
                        <CardItem cardBody>
                        <Content>
                        <View style={{flexDirection: 'row', padding: 5}}>
                            <Dropdown
                                containerStyle={{padding: 5, marginTop: 0, backgroundColor: '#D8D869', borderRadius: 7, borderColor: '#16A085', borderWidth: 1, width: '100%', height: 50 }}
                                rippleInsets={{ top: 0 }}
                                dropdownOffset={{ top: 15, left: 10 }}
                                itemTextStyle={{ marginLeft: 2, marginBottom: 2, }}
                                pickerStyle={{ paddingLeft: 5, }}
                                label='Kategori Buku'
                                itemColor='rgba(24, 31, 32, 0.46)'
                                itemPadding={2}
                                textColor='#000'
                                data={data}
                                onChangeText={(TextInputText) => this.setState({ jenisBuku: TextInputText })}
                                ref={input => { this.jenisBuku = input }}
                            />
                            </View>
                        </Content>
                        </CardItem>
                    </Card>
                </View>
                <Content
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.cariDataMhs}
                        />
                    }>
                    
                    <View>
                        <FlatList
                            data={this.state.data}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item }) =>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('detailAnggota', { id: item.ISBN })}>
                                    <Card>
                                        <CardItem style={{ backgroundColor: '#ecf0f1' }}>
                                            <Left>
                                                <Thumbnail source={{ uri: 'http://mhs.rey1024.com/appmobile/B1615051046/images/mhs.png' }} />
                                                <Body>
                                                    <Text style={{ fontWeight: 'bold' }}>{item.JudulBuku}</Text>
                                                    <Text note>{item.ISBN}</Text>
                                                    <Text note>{item.NamaKategori}</Text>
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
                                                            <Text>{item.Pengarang}</Text>
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
                    </View>
                </Content>
            </Container>

        );
    }



}

export default cariBuku;

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
    },
    TouchableOpacityStyle:
        {
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: '#16A085',
            marginBottom: 10,
            width: '25%',
            flex: 3,
            marginLeft: 10,
            marginRight: 5,
            borderRadius: 7,
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
        },
});