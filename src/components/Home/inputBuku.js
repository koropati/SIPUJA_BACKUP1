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

class inputBuku extends Component {

    static navigationOptions = {
        title: 'Input Buku',
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
            isbn: '',
            judul: '',
            pengarang: '',
            penerbit: '',
            tahunTerbit: today.getFullYear(),
            kondisi: '',
            tglBeli: today.getDate() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getFullYear(),
            kategori: '',
        }
    }

    render() {
        return (

            <Container style={{ flex: 1 }}>
                <Content contentContainerStyle={{
                    flex: 1,
                    backgroundColor: '#1ABC9C',
                }}>
                    <View style={styles.MainContainer}>
                        <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                            <View style={styles.contentJudul}>
                                <Text style={styles.TextStyle}>ISBN</Text>
                            </View>
                            <TextInput
                                placeholder="Masukan ISBN "
                                style={styles.TextInputStyleClass}
                                underlineColorAndroid="transparent"
                                onChangeText={(TextInputText) => this.setState({ isbn: TextInputText })}
                                keyboardType='numeric'
                                ref={input => { this.isbn = input }} />
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                            <View style={styles.contentJudul}>
                                <Text style={styles.TextStyle}>JUDUL BUKU</Text>
                            </View>
                            <TextInput
                                placeholder="Masukan Judul Buku"
                                style={styles.TextInputStyleClass}
                                underlineColorAndroid="transparent"
                                onChangeText={(TextInputText) => this.setState({ judul: TextInputText })}
                                keyboardType='numeric'
                                ref={input => { this.judul = input }} />
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                            <View style={styles.contentJudul}>
                                <Text style={styles.TextStyle}>PENGARANG</Text>
                            </View>
                            <TextInput
                                placeholder="Masukan Nama Pengarang"
                                style={styles.TextInputStyleClass}
                                underlineColorAndroid="transparent"
                                onChangeText={(TextInputText) => this.setState({ pengarang: TextInputText })}
                                keyboardType='numeric'
                                ref={input => { this.pengarang = input }} />
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                            <View style={styles.contentJudul}>
                                <Text style={styles.TextStyle}>PENERBIT</Text>
                            </View>
                            <TextInput
                                placeholder="Masukan Nama Penerbit"
                                style={styles.TextInputStyleClass}
                                underlineColorAndroid="transparent"
                                onChangeText={(TextInputText) => this.setState({ penerbit: TextInputText })}
                                keyboardType='numeric'
                                ref={input => { this.penerbit = input }} />
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                            <View style={styles.contentJudul}>
                                <Text style={styles.TextStyle}>TAHUN TERBIT</Text>
                            </View>
                            <DatePicker
                                style={{
                                    width: '65%',
                                    backgroundColor: "#fff",
                                    borderWidth: 1,
                                    borderColor: '#16A085',
                                    borderRadius: 7,
                                }}
                                date={this.state.tahunTerbit}
                                mode="date"
                                viewMode="year"
                                startStage="year"
                                finalStage="year"
                                openToYearSelection="true"
                                placeholder="Pilih Tahun"
                                format="YYYY"
                                minDate="2013"
                                maxDate={(new Date()).getDate()+ "-" + parseInt((new Date()).getMonth() + 1) + "-" + (new Date()).getFullYear()}
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
                                onDateChange={(date) => { this.setState({ tahunTerbit: date }) }}
                            />

                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                            <View style={styles.contentJudul}>
                                <Text style={styles.TextStyle}>KONDISI</Text>
                            </View>
                            <TextInput
                                placeholder="Tambah Kondisi Buku"
                                style={styles.TextInputStyleClass}
                                underlineColorAndroid="transparent"
                                onChangeText={(TextInputText) => this.setState({ kondisi: TextInputText })}
                                keyboardType='numeric'
                                ref={input => { this.kondisi = input }} />
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                            <View style={styles.contentJudul}>
                                <Text style={styles.TextStyle}>TGL BELI</Text>
                            </View>
                            <DatePicker
                                style={{
                                    width: '65%',
                                    backgroundColor: "#fff",
                                    borderWidth: 1,
                                    borderColor: '#16A085',
                                    borderRadius: 7,
                                }}
                                date={this.state.tglBeli}
                                mode="date"
                                placeholder="Pilih Tanggal"
                                format="DD-MM-YYYY"
                                minDate="01-01-2013"
                                maxDate={"01-" + parseInt((new Date()).getMonth() + 1) + "-" + (new Date()).getFullYear()}
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
                                onDateChange={(date) => { this.setState({ tglBeli: date }) }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                            <View style={styles.contentJudul}>
                                <Text style={styles.TextStyle}>KATEGORI</Text>
                            </View>
                            <View style={{
                                            height: 40,
                                            //marginBottom: 10,
                                            width: '65%',
                                            //textColor: '#FFF',

                                        }}>
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
                                onChangeText={(TextInputText) => this.setState({ kategori: TextInputText })}
                                ref={input => { this.kategori = input }}
                            />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.TouchableOpacitySubmitStyle}>
                        <Text style={styles.TextStyle}>Tambah Data Buku</Text>
                    </TouchableOpacity>
                </Content>
            </Container>

        );
    }



}

export default inputBuku;

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
    }
});