import React, {Component} from 'react'
import {Dimensions, View, StyleSheet} from 'react-native';
import Button from './components/Button'
import Background from './components/Background'
const width = Dimensions.get('window').width

export default class Home extends Component{
    static navigationOptions = {
      header: null
    };

    render() {
      return (
        <View style={styles.container}>
          <Background
            width= {width}
            flex= "1"
            imgBackground={ styles.imgBackground }
            backgroundTextContainer= {styles.backgroundTextContainer}
            titleText = {styles.titleText}
            contentText = {styles.contentText}
            backgroundImage= {require('../img/party.jpg')}
            text= {['PartyFinder']}
            text2= "Encontre seu par perfeito para sua próxima festa"
          />
          <Button onPress={() => this.props.navigation.navigate('Login')}/>
        </View>
      );
    };
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  backgroundTextContainer: {
    marginTop: '55%',
    width: '100%',
    alignItems: 'center'
  },
  imgBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.9,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 29,
    color: '#DCDCDC',
  },
  contentText: {
    textAlign: 'left',
    fontSize: 21,
    color: '#DCDCDC',
    marginLeft: '20%',
    marginRight: '20%',
  },
});
