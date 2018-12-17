import React, {Component} from 'react-native'
//StyleSheets
import {styleHome as styles} from '../style/styleHome'

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
          <TouchableHighlight 
            onPress={this._onPressButton}
            onLongPress={this._onLongPressButton} 
            underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>ENTRAR</Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    };
  }

