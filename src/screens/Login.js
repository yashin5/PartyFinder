import React, {Component} from 'react'
import {TouchableOpacity,Image, Dimensions, ImageBackground, Text, View, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width

export default class Login extends Component{
    constructor(){
        super();
        this.state = {icons:{
            baladas: '../img/dancing.png',
            raves: '../img/dj.png',
            rock: '../img/rock.png',
            cinemas: '../img/ticket.png'
            
        }}
    }
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
                <View style={styles.categoriesContainer}>
                    <View style={styles.categoriesTitle}>
                        <Text> Categorias</Text>
                        <Text> Ver todas  -></Text>
                    </View>
                    <View style={styles.navCategories}>
                        <TouchableOpacity>
                            <View>
                                <Image source={require('../img/dancing.png')}/>
                                <Text style={styles.navCategoriesText}>Baladas</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View>
                                <Image source={require('../img/dj.png')}/>
                                <Text style={styles.navCategoriesText}>Raves</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View>
                                <Image source={require('../img/rock.png')}/>
                                <Text style={styles.navCategoriesText}>Shows</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View>
                                <Image source={require('../img/ticket.png')}/>
                                <Text style={styles.navCategoriesText}>Cinema</Text>
                            </View>           
                        </TouchableOpacity>         
                    </View>
                </View>
                <View style={styles.showBannerContainer} >
                    <Image style={styles.showBanner}
                        source={require('../img/party.jpg')}>
                    </Image>
                </View>
                <View>
                <Text>DOMINGO, 22 DE SETEMBRO</Text>
                <Text>MATANZA</Text>
                <Text>45.000</Text>

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
    categoriesContainer:{
        width: width,
    },
    categoriesTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 18,
        marginRight: 18,

    },
    navCategories:{
        marginLeft: 18,
        marginRight: 18,
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
     },
     showBannerContainer: {
        marginTop: 18,
        opacity: 0.6,
     },
     showBanner: {


        borderRadius: 10,
        width: width-100,
        height: width-300
     }
});
  