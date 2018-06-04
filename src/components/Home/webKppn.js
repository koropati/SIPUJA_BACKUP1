import React, { Component } from 'react';
import { WebView } from 'react-native';

class webKppn extends Component {
    static navigationOptions = {
        title: 'WEB KPPN',
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
            <WebView
                source={{ uri: 'http://djpbn.kemenkeu.go.id/kppn/singaraja/id/' }}
                style={{ marginTop: 20 }}
                javaScriptEnabled={true}
                scalesPageToFit={false}
                startInLoadingState={true}
                
            />
        );
    }
}
export default webKppn;