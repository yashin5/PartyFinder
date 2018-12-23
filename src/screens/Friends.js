import React, {Component} from 'react'
import {ScrollView, Dimensions, StyleSheet, View, Text} from 'react-native'
import Background from './components/Background'
import Navegation from './components/Navegation'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class Friends extends Component{
    constructor(){
        super();
        this.state= {}
    }
    render(){
        return(
            <ScrollView>
            <View style={styles.container}>
                <Background
                width={width}
                imgBackground={styles.imgBackground}
                backgroundTextContainer={styles.backgroundTextContainer}
                contentText={styles.contentText}
                backgroundImage={require('../img/amigos.png')}
                titleText={styles.titleText}
                text={['Encontre seus AMIGOS']}
                />
                <Navegation filter={['SUA CIDADE', 'OUTRAS CIDADES']}/>
            </View>
            </ScrollView>
        );
    };
};

const styles= StyleSheet.create({
    container: {
        height: height + height / 2 ,
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    imgBackground: {
        opacity: 0.6,
        backgroundColor: 'black',
        position: 'absolute',
        width: '100%',
        height: width-140,
    },
    backgroundTextContainer: {
        marginTop: '44%',
        alignItems: 'center',
    },
    titleText: {
        color: '#DCDCDC',
        fontSize: 26,
        fontWeight: '500'
    },
})