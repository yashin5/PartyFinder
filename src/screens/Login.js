import React, {Component} from 'react'
import {Image, Dimensions, ImageBackground, Text, View, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width

export default class Login extends Component{
    static navigationOptions = {
        header: null
      }
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground 
                style={ styles.imgBackground }
                resizeMode='cover' 
                source={require('../img/party2.jpg')}>
                </ImageBackground>
                <View style={styles.backgroundTextContainer}>
                    <Text style={styles.titleText}>EAT.</Text>
                    <Text style={styles.titleText}>SLEEP.</Text>
                    <Text style={styles.titleText}>PARTY.</Text>
                    <Text style={styles.titleText}>REPEAT.</Text>
                </View>
                <View style={styles.nav}>
                    <Text style={styles.navText}>PROXIMIDADES</Text>
                    <Text style={styles.navText}>EM ALTA</Text>
                    <Text style={styles.navText}>FUTUROS</Text>
                    <Text style={styles.navText}>TODOS</Text>
                </View>
                <View style={styles.Categories}>
                    <Text> Categorias</Text>
                    <Text> Ver todas</Text>
                    <View style={styles.navCategories}>
                        <View>
                            <Image source={require('../img/dancing.png')}/>
                            <Text style={styles.navCategoriesText}>Baladas</Text>
                        </View>
                        <View>
                            <Image source={require('../img/dancing.png')}/>
                            <Text style={styles.navCategoriesText}>Baladas</Text>
                        </View>
                        <View>
                            <Image source={require('../img/dancing.png')}/>
                            <Text style={styles.navCategoriesText}>Baladas</Text>
                        </View>
                        <View>
                            <Image source={require('../img/dancing.png')}/>
                            <Text style={styles.navCategoriesText}>Baladas</Text>
                        </View>
                        
                    </View>
                </View>
            </View>
       
        );
    };
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    backgroundTextContainer: {
        width: '100%',
        marginTop: '23%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    imgBackground: {
        position: 'absolute',
        width: width,
        height: width-140,
        flex: 1, 
        alignItems: 'center',
        opacity: 0.9
    },
    titleText: {
        textAlign: 'left',
        fontSize: 32,
        color: '#DCDCDC',
        fontWeight: 'bold',

    },
    contentText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#DCDCDC',   
    },
    nav: {
        width: width-1,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 8,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    navText: {

    },
    Categories:{
        width: width,
        marginLeft: 18,
    },
    navCategories:{
        width: width,
        marginLeft: 6,
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    }
});
  