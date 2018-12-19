import React, {Component} from 'react'
import {TouchableNativeFeedback, View, Text, StyleSheet} from 'react-native'

export default function Button(props){
    return(
        <TouchableNativeFeedback 
            onPress={props.onPress}
            underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>ENTRAR</Text>
            </View>
          </TouchableNativeFeedback>
    )
}
const styles = StyleSheet.create({
    button: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#DCDCDC'
    },
    buttonText: {
        fontWeight: 'bold',
        padding: 20,
        textAlign: 'center',
        color: '#696969'
    },
})