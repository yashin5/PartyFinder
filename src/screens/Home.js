import React, {Component} from 'react'
import {ImageBackground, Text, View, StyleSheet} from 'react-native';

import Button from './components/Button'

export default class Home extends Component {
    render() {
      return (
        <View style={styles.container}>
          <ImageBackground 
            style={ styles.imgBackground } 
            resizeMode='cover' 
            source={require('../img/party.jpg')}>
            <View style={styles.BackgroundTextContainer}>
              <Text style={styles.TitleText}>PartyFinder</Text>
              <Text style={styles.ContentText}>Encontre seu par perfeito para sua próxima festa</Text>
            </View>
          </ImageBackground>
          <Button/>
        </View>
      );
    };
  }
const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  BackgroundTextContainer: {
      flex: 1,
      flexDirection: 'column',
      width: '60%',
      marginTop: '38%',
      marginLeft: '20%',
  },
  imgBackground: {
      width: '100%',
      height: '100%',
      flex: 1 
  },
  TitleText: {
      textAlign: 'center',
      fontSize: 29,
      color: '#DCDCDC'
  },
  ContentText: {
      textAlign: 'center',
      fontSize: 20,
      color: '#DCDCDC',   
  },
});