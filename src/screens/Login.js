import React, {Component} from 'react'
import {Dimensions, ImageBackground, Text, View, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width

export default function Login(props){
    return(
        <ImageBackground
            style={ styles.imgBackground } 
            resizeMode='cover' 
            source={require('../img/party2.jpg')}>
            <View style={styles.backgroundTextContainer}>
                <Text style={styles.titleText}>EAT.</Text>
                <Text style={styles.titleText}>SLEEP.</Text>
                <Text style={styles.titleText}>PARTY.</Text>
                <Text style={styles.titleText}>REPEAT.</Text>
            </View>
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    backgroundTextContainer: {
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
    titleText: {
        textAlign: 'left',
        fontSize: 32,
        color: '#DCDCDC',
        fontWeight: 'bold'
    },
});
  