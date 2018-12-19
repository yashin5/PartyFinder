import React, {Component} from 'react'
import {ImageBackground, Text, View, StyleSheet} from 'react-native';

import Button from './components/Button'

export default class Home extends Component {
    static navigationOptions = {
      header: null
    }
    render() {
      return (
        <View style={styles.container}>
          <ImageBackground 
            style={ styles.imgBackground }
            resizeMode='cover' 
            source={require('../img/party.jpg')}>
          </ImageBackground>
          <View style={styles.backgroundTextContainer}>
              <Text style={styles.titleText}>PartyFinder</Text>
              <Text style={styles.contentText}>Encontre seu par perfeito para sua próxima festa</Text>
            </View>
          <Button onPress={() => this.props.navigation.navigate('Login')}/>
        </View>
      );
    };
  }
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'black'
  },
  backgroundTextContainer: {
      width: '60%',
      marginTop: '48%',
      justifyContent: 'center',
  },
  imgBackground: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      flex: 1, 
      alignItems: 'center',
      opacity: 0.7
  },
  titleText: {
      textAlign: 'center',
      fontSize: 29,
      color: '#DCDCDC',
  },
  contentText: {
      textAlign: 'center',
      fontSize: 20,
      color: '#DCDCDC',   
  },
});