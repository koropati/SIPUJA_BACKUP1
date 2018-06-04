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

class HomeGuest extends Component {

    static navigationOptions = {
        header: null,
        drawerIcon: (
            <Image source={require('../../images/logo/home.png')}
                style={{ height: 24, width: 24 }} />
        ),
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
                                <Image source={require('../../images/logo/Logo3.png')} style={{ height: 50, width: 100, resizeMode: Image.resizeMode.contain, padding: 10, marginTop: 10, }} />

                            </Button>
                        </Right>


                    </Header>

                    <View style={styles.bottom}>


                        <TouchableOpacity style={styles.bottomItemLeft}>
                            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#2B5E8A' }} >
                                <View style={{ width: 100, height: '100%' }}>
                                    <Image source={require('../../images/menu/inputPeminjam.png')} style={{ height: 80, width: 80, padding: 10, marginTop: 12, marginLeft: 20 }} />
                                    <Text style={{ color: '#FFF', marginLeft: 10, marginTop: 10, fontSize: 10, }}>Cinta</Text>
                                </View>
                                <View style={{ width: '100%', height: '100%' }}>
                                    <Text style={styles.judulMenu}>Input Data</Text>
                                    <Text style={{ color: '#FFF', marginTop: 5, fontSize: 18, fontWeight: 'bold' }}>Cinta Buta</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomItemRight} >
                            <View style={{ flex: 1, backgroundColor: '#6B0040' }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('../../images/menu/pengembalian.png')} style={{ height: 80, width: 80, padding: 2, marginTop: 12, }} />
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#FFF', marginTop: 5, fontSize: 14, fontWeight: 'bold' }}>Pengembalian</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomItemLeft} >
                            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#E68700' }} >
                                <View style={{ width: 100, height: '100%' }}>
                                    <Image source={require('../../images/menu/inputBuku.png')} style={{ height: 80, width: 80, padding: 10, marginTop: 12, marginLeft: 20 }} />
                                    <Text style={{ color: '#FFF', marginLeft: 10, marginTop: 10, fontSize: 10, }}>Data Buku</Text>
                                </View>
                                <View style={{ width: '100%', height: '100%' }}>
                                    <Text style={styles.judulMenu}>Input Data</Text>
                                    <Text style={{ color: '#FFF', marginTop: 5, fontSize: 18, fontWeight: 'bold' }}>Buku</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomItemRight} >
                            <View style={{ flex: 1, backgroundColor: '#815FB1' }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('../../images/menu/dataBuku.png')} style={{ height: 80, width: 80, padding: 2, marginTop: 12, }} />
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#FFF', marginTop: 5, fontSize: 14, fontWeight: 'bold' }}>Data Buku</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomItemLeft} >
                            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#8DA62F' }} >
                                <View style={{ width: 100, height: '100%' }}>
                                    <Image source={require('../../images/menu/cariBuku.png')} style={{ height: 80, width: 80, padding: 10, marginTop: 12, marginLeft: 20 }} />
                                    <Text style={{ color: '#FFF', marginLeft: 10, marginTop: 10, fontSize: 10, }}>Cari Buku</Text>
                                </View>
                                <View style={{ width: '100%', height: '100%' }}>
                                    <Text style={styles.judulMenu}>Cari Data</Text>
                                    <Text style={{ color: '#FFF', marginTop: 5, fontSize: 18, fontWeight: 'bold' }}>Buku</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomItemRight} >
                            <View style={{ flex: 1, backgroundColor: '#546FB3' }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('../../images/menu/dataPeminjaman.png')} style={{ height: 80, width: 80, padding: 2, marginTop: 12, }} />
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#FFF', marginTop: 5, fontSize: 14, fontWeight: 'bold' }}>Data Peminjaman</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomItemLeft} >
                            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#C33B00' }} >
                                <View style={{ width: 100, height: '100%' }}>
                                    <Image source={require('../../images/menu/tambahAnggota.png')} style={{ height: 80, width: 80, padding: 10, marginTop: 12, marginLeft: 20, }} />
                                    <Text style={{ color: '#FFF', marginLeft: 10, marginTop: 10, fontSize: 10, }}>Anggota</Text>
                                </View>
                                <View style={{ width: '100%', height: '100%' }}>
                                    <Text style={styles.judulMenu}>Tambah</Text>
                                    <Text style={{ color: '#FFF', marginTop: 5, fontSize: 18, fontWeight: 'bold' }}>Data Anggota</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomItemRight} >
                            <View style={{ flex: 1, backgroundColor: '#684426' }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('../../images/menu/lihatAnggota.png')} style={{ height: 80, width: 80, padding: 2, marginTop: 12, }} />
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#FFF', marginTop: 5, fontSize: 14, fontWeight: 'bold' }}>Data Anggota</Text>
                                </View>
                            </View>
                        </TouchableOpacity>



                    </View>


                </View>

            </ImageBackground>
        );
    }



}

export default HomeGuest;

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