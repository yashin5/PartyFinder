import React, {Component} from 'react'
import {Dimensions, View, StyleSheet} from 'react-native';
import firebase from 'react-native-firebase'
import FBSDK, {AccessToken, LoginManager} from 'react-native-fbsdk'
import Button from './components/Button'
import Background from './components/Background'
const width = Dimensions.get('window').width

export default class Home extends Component{
    constructor(){
      super();
      this.state = {login: false}
    }
    static navigationOptions = {
      header: null
    };


     facebookLogin = async () => {
      try {
        const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
    
        if (result.isCancelled) {
          throw new Error('User cancelled request'); // Handle this however fits the flow of your app
        }        
        this.props.navigation.navigate('Login')
    
        // get the access token
        const data = await AccessToken.getCurrentAccessToken();
    
        if (!data) {
          throw new Error('Something went wrong obtaining the users access token'); // Handle this however fits the flow of your app
        }
    
        // create a new firebase credential with the token
        const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
    
        // login with credential
        const currentUser = await firebase.auth().signInWithCredential(credential);
    
        console.warn(JSON.stringify(currentUser.user.toJSON()))
      } catch (e) {
        console.error(e);
      }
    }

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
          <Button onPress={() => {
            return this.facebookLogin() }}/>
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
