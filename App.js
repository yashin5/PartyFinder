import React, {Component} from 'react';
import {Dimensions, TextInput, ImageBackground, TouchableNativeFeedback, Text, View, StyleSheet, Platform} from 'react-native';
//Component

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const width = Dimensions.get('window').width

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ImageBackground
        style={ styles.imgBackground } 
        resizeMode='cover' 
        source={require('./src/img/party2.jpg')}>
        <View style={styles.BackgroundTextContainer}>

          <Text style={styles.TitleText}>EAT.</Text>
          <Text style={styles.TitleText}>SLEEP.</Text>
          <Text style={styles.TitleText}>PARTY.</Text>
          <Text style={styles.TitleText}>REPEAT.</Text>
        </View>
      </ImageBackground>
      )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  BackgroundTextContainer: {
      flex: 1,
      flexDirection: 'column',
      marginTop: '13%',
      marginLeft: '39%',
  },
  imgBackground: {
      width: width,
      height: width-140,
      flex: 1 ,
  },
  TitleText: {
      textAlign: 'left',
      fontSize: 32,
      color: '#DCDCDC',
      fontWeight: 'bold'
  },
  ContentText: {
      textAlign: 'center',
      fontSize: 20,
      color: '#DCDCDC',   
  },
});
