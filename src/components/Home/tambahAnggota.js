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
import DatePicker from 'react-native-datepicker'
import { Picker } from 'react-native-picker-dropdown'
import { Dropdown } from 'react-native-material-dropdown';

let data = [{
    value: '01', label: 'Pegawai Tetap'
}, {
    value: '02', label: 'Pegawai Honorer'
}, {
    value: '03', label: 'Instansi Luar'
}, {
    value: '04', label: 'Pelajar/Mahasiswa'
}, {
    value: 'Petugas Perpus', label: 'Petugas Perpus'
}];

class tambahAnggota extends Component {
    
    static navigationOptions = {
        title: 'Tambah Anggota',
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
        var today = new Date();
        super(props);
        this.state = {
            username: '',
            namaAnggota: '',
            jenisKelamin: 'Laki-Laki',
            dataJK: ['Laki-Laki', 'Perempuan'],
            checked: 0,
            tglLahir: (today.getFullYear() - 6) + "-" + parseInt(today.getMonth() + 1) + "-" + today.getDate(),
            alamat: '',
            noHp: '',
            email: '',
            jenisAnggota: '',
            ActivityIndicator_Loading: false,
        }

    }
    inputDataAnggota = () => {
        this.setState({ ActivityIndicator_Loading: true }, () => {
            fetch('http://dewoksatria.000webhostapp.com/sipuja/inputAnggota.php',
                {
                    method: 'POST',
                    headers:
                        {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                    body: JSON.stringify(
                        {
                            username: this.state.username,
                            namaAnggota: this.state.namaAnggota,
                            jenisKelamin: this.state.jenisKelamin,
                            tglLahir: this.state.tglLahir,
                            alamat: this.state.alamat,
                            noHp: this.state.noHp,
                            email: this.state.email,
                            jenisAnggota: this.state.jenisAnggota,

                        })

                }).then((response) => response.json()).then((responseJsonFromServer) => {
                    alert(responseJsonFromServer);
                    this.setState({ ActivityIndicator_Loading: false });
                }).catch((error) => {
                    console.error(error);
                    this.setState({ ActivityIndicator_Loading: false });
                });
            this.setState({
                username: '',
                namaAnggota: '',
                checked: '0',
                jenisKelamin: 'Laki-Laki',
                tglLahir: '',
                alamat: '',
                noHp: '',
                email: '',
                jenisAnggota: '',
            })
        });
        this.username.clear()
        this.namaAnggota.clear()
        //this.jenisKelamin.clear()
        //this.tglLahir.clear()
        this.alamat.clear()
        this.noHp.clear()
        this.email.clear()
        //this.jenisAnggota.clear()

    }

    render() {
        return (

            <Container style={{ flex: 1, backgroundColor: '#1ABC9C', }}>
                <ScrollView>
                    <KeyboardAvoidingView behavior="padding">
                        <Content contentContainerStyle={{
                            flex: 1,

                        }}>
                            <ScrollView>
                                <View style={styles.MainContainer}>
                                    <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                                        <View style={styles.contentJudul}>
                                            <Text style={styles.TextStyle}>USERNAME</Text>
                                        </View>
                                        <TextInput
                                            placeholder="Masukan Username "
                                            style={styles.TextInputStyleClass}
                                            underlineColorAndroid="transparent"
                                            onChangeText={(TextInputText) => this.setState({ username: TextInputText })}
                                            //returnKeyType="next"
                                            keyboardType='email-address'
                                            autoCapitalize="none"
                                            autocorrect={false}
                                            ref={input => { this.username = input }} />
                                    </View>
                                    <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                                        <View style={styles.contentJudul}>
                                            <Text style={styles.TextStyle}>NAMA</Text>
                                        </View>
                                        <TextInput
                                            placeholder="Masukan Nama Anggota"
                                            style={styles.TextInputStyleClass}
                                            underlineColorAndroid="transparent"
                                            onChangeText={(TextInputText) => this.setState({ namaAnggota: TextInputText })}
                                            keyboardType='default'
                                            //returnKeyType="next"
                                            ref={input => { this.namaAnggota = input }} />
                                    </View>
                                    <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                                        <View style={styles.contentJudul}>
                                            <Text style={styles.TextStyle}>JENIS KELAMIN</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', }}>
                                            {
                                                this.state.dataJK.map((dataJK, key) => {
                                                    return (
                                                        <View >
                                                            {
                                                                this.state.checked == key ?
                                                                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20, }}>
                                                                        <Image style={{ height: 20, width: 20, marginRight: 5, }} source={require('../../images/logo/radioCheck.png')} />
                                                                        <Text>{dataJK}</Text>
                                                                    </TouchableOpacity>
                                                                    :
                                                                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20, }} onPress={() => { this.setState({ checked: key, jenisKelamin: this.state.dataJK[key] }) }}>
                                                                        <Image style={{ height: 20, width: 20, marginRight: 5, }} source={require('../../images/logo/radioUnCheck.png')} />
                                                                        <Text>{dataJK}</Text>
                                                                    </TouchableOpacity>
                                                                
                                                            }
                                                        </View>
                                                    )
                                                    
                                                })
                                                
                                            }
                                    
                                            
                                            
                                        </View>
                                        
                                    </View>
                                    <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                                        <View style={styles.contentJudul}>
                                            <Text style={styles.TextStyle}>TANGGAL LAHIR</Text>
                                        </View>
                                        <DatePicker
                                            style={{
                                                width: '65%',
                                                backgroundColor: "#fff",
                                                borderWidth: 1,
                                                borderColor: '#16A085',
                                                borderRadius: 7,
                                            }}
                                            date={this.state.tglLahir}
                                            mode="date"
                                            placeholder="Pilih Tanggal"
                                            format="YYYY-MM-DD"
                                            minDate={((new Date()).getFullYear() - 110)+"01-01"}
                                            maxDate={((new Date()).getFullYear() - 6)+"-"+parseInt((new Date()).getMonth() + 1)+"-01"}
                                            confirmBtnText="Confirm"
                                            cancelBtnText="Cancel"
                                            customStyles={{
                                                dateIcon: {
                                                    position: 'absolute',
                                                    left: 0,
                                                    top: 4,
                                                    marginLeft: 0
                                                },
                                                dateInput: {
                                                    marginLeft: 36,
                                                    borderColor: 'rgba(0,0,0,0)',
                                                }
                                                // ... You can check the source to find the other keys.
                                            }}
                                            onDateChange={(date) => { this.setState({ tglLahir: date }) }}
                                            ref={input => { this.tglLahir = input }}
                                        />
                                    </View>
                                    <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                                        <View style={styles.contentJudul}>
                                            <Text style={styles.TextStyle}>ALAMAT</Text>
                                        </View>
                                        <TextInput
                                            placeholder="Masukan Alamat"
                                            style={styles.TextInputStyleClass}
                                            underlineColorAndroid="transparent"
                                            onChangeText={(TextInputText) => this.setState({ alamat: TextInputText })}
                                            keyboardType='default'
                                            //returnKeyType="next"
                                            ref={input => { this.alamat = input }} />

                                    </View>
                                    <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                                        <View style={styles.contentJudul}>
                                            <Text style={styles.TextStyle}>NO. HP</Text>
                                        </View>
                                        <TextInput
                                            placeholder="Masukan No HP"
                                            style={styles.TextInputStyleClass}
                                            underlineColorAndroid="transparent"
                                            onChangeText={(TextInputText) => this.setState({ noHp: TextInputText })}
                                            keyboardType='numeric'
                                            //returnKeyType="next"
                                            ref={input => { this.noHp = input }} />
                                    </View>
                                    <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                                        <View style={styles.contentJudul}>
                                            <Text style={styles.TextStyle}>EMAIL</Text>
                                        </View>
                                        <TextInput
                                            placeholder="Masukan Email"
                                            style={styles.TextInputStyleClass}
                                            underlineColorAndroid="transparent"
                                            onChangeText={(TextInputText) => this.setState({ email: TextInputText })}
                                            keyboardType="email-address"
                                            //returnKeyType="next"
                                            autoCapitalize="none"
                                            autocorrect={false}
                                            ref={input => { this.email = input }} />
                                    </View>
                                    <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                                        <View style={styles.contentJudul}>
                                            <Text style={styles.TextStyle}>JENIS ANGGOTA</Text>
                                        </View>

                                        <View style={{
                                            height: 40,
                                            //marginBottom: 10,
                                            width: '65%',
                                            //textColor: '#FFF',

                                        }}>
                                            <Dropdown
                                                containerStyle={{ padding: 5, marginTop: 0, backgroundColor: '#D8D869', borderRadius: 7, borderColor: '#16A085', borderWidth: 1, width: '100%', height: 50 }}
                                                rippleInsets={{ top: 0 }}
                                                dropdownOffset={{ top: 15, left: 10 }}
                                                itemTextStyle={{ marginLeft: 2, marginBottom: 2, }}
                                                pickerStyle={{ paddingLeft: 5, }}
                                                label='Jenis Anggota'
                                                itemColor='rgba(24, 31, 32, 0.46)'
                                                itemPadding={2}
                                                textColor='#000'
                                                data={data}
                                                onChangeText={(TextInputText) => this.setState({ jenisAnggota: TextInputText })}
                                                ref={input => { this.jenisAnggota = input }}
                                            />
                                        </View>
                                    </View>

                                </View>
                            </ScrollView>
                            <TouchableOpacity
                                onPress={this.inputDataAnggota}
                                activeOpacity={0.5}
                                style={styles.TouchableOpacitySubmitStyle}>
                                <Text style={styles.TextStyle}>Tambah Anggota</Text>
                            </TouchableOpacity>
                        </Content>
                    </KeyboardAvoidingView>
                </ScrollView>
 
            </Container>

        );
    }
    
}

export default tambahAnggota;

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
        height: 60,
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
            //marginBottom: 10,
            width: '65%'
        },
    TextStyle:
        {
            textAlign: 'left',
            color: '#FFF',
            fontWeight: 'bold',
        },
    contentJudul: {
        width: '35%',
        justifyContent: 'center',
        //alignItems:'center', 
        //flex: 1,
    },
    picker: {
        alignSelf: 'stretch',
        backgroundColor: 'cadetblue',
        paddingHorizontal: 20,
        paddingVertical: 20,
        margin: 20,
        borderRadius: 10,
    },
});