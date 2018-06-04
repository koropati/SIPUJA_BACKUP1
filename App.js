import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/Splash'
import Main from './src/Main'
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={curentScreen: 'Splash'};
    setTimeout(() => {
      this.setState({curentScreen: 'Main'})
    }, 3000);
  }
  render() {
    const {curentScreen} = this.state
    let mainScreen = curentScreen === 'Splash' ? <Splash/> : <Main/>
    return mainScreen
  }
}
console.disableYellowBox = true;