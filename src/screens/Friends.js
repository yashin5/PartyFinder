import React, {Component} from 'react'
import {TouchableOpacity, Image, ScrollView, Dimensions, StyleSheet, View, Text} from 'react-native'
import Background from './components/Background'
import Navegation from './components/Navegation'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class Friends extends Component{
    constructor(){
        super();
        this.state= { 
            filter: 'SUA CIDADE',
        }
    };

    filtering = (target) =>{
        this.setState({filter: target});
    };

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
                    <React.Fragment>
                        <Navegation onPressFilter={this.state.filter} 
                            filtering={this.filtering}
                            filter={['SUA CIDADE', 'OUTRAS CIDADES']}
                        />
                    </React.Fragment>
                    <View style={{marginTop: 18, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', width: width-18, height: '15%'}}>
                        <View style={{marginBottom: 12, padding: 8, borderBottomWidth: 1, borderBottomColor: '#ccc', borderRightWidth: 1, borderRightColor: '#ccc',width: '30%'}}>
                            <TouchableOpacity>
                                <View style={{alignItems: 'center'}}>
                                    <Image style={{width: 60, height: 60, borderRadius: 100}}source={require('../img/party.jpg')}/>
                                    <Text style={{textAlign: 'center',marginTop: 10}}>Yashin do Nascimento dos Santos</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginBottom: 12, padding: 8, borderBottomWidth: 1, borderBottomColor: '#ccc', borderRightWidth: 1, borderRightColor: '#ccc',width: '30%'}}>
                            <TouchableOpacity>
                                <View style={{alignItems: 'center'}}>
                                    <Image style={{width: 60, height: 60, borderRadius: 100}}source={require('../img/party.jpg')}/>
                                    <Text style={{textAlign: 'center',marginTop: 10}}>Yashin do Nascimento dos Santos</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginBottom: 12, padding: 8, borderBottomWidth: 1, borderBottomColor: '#ccc', borderRightWidth: 1, borderRightColor: '#ccc',width: '30%'}}>
                            <TouchableOpacity>
                                <View style={{alignItems: 'center'}}>
                                    <Image style={{width: 60, height: 60, borderRadius: 100}}source={require('../img/party.jpg')}/>
                                    <Text style={{textAlign: 'center',marginTop: 10}}>Yashin do Nascimento dos Santos</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginBottom: 12, padding: 8, borderBottomWidth: 1, borderBottomColor: '#ccc', borderRightWidth: 1, borderRightColor: '#ccc',width: '30%'}}>
                            <TouchableOpacity>
                                <View style={{alignItems: 'center'}}>
                                    <Image style={{width: 60, height: 60, borderRadius: 100}}source={require('../img/party.jpg')}/>
                                    <Text style={{textAlign: 'center',marginTop: 10}}>Yashin do Nascimento dos Santos</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginBottom: 12, padding: 8, borderBottomWidth: 1, borderBottomColor: '#ccc', borderRightWidth: 1, borderRightColor: '#ccc',width: '30%'}}>
                            <TouchableOpacity>
                                <View style={{alignItems: 'center'}}>
                                    <Image style={{width: 60, height: 60, borderRadius: 100}}source={require('../img/party.jpg')}/>
                                    <Text style={{textAlign: 'center',marginTop: 10}}>Yashin do Nascimento dos Santos</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginBottom: 12, padding: 8, borderBottomWidth: 1, borderBottomColor: '#ccc', borderRightWidth: 1, borderRightColor: '#ccc',width: '30%'}}>
                            <TouchableOpacity>
                                <View style={{alignItems: 'center'}}>
                                    <Image style={{width: 60, height: 60, borderRadius: 100}}source={require('../img/party.jpg')}/>
                                    <Text style={{textAlign: 'center',marginTop: 10}}>Yashin do Nascimento dos Santos</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginBottom: 12, padding: 8, borderBottomWidth: 1, borderBottomColor: '#ccc', borderRightWidth: 1, borderRightColor: '#ccc',width: '30%'}}>
                            <TouchableOpacity>
                                <View style={{alignItems: 'center'}}>
                                    <Image style={{width: 60, height: 60, borderRadius: 100}}source={require('../img/party.jpg')}/>
                                    <Text style={{textAlign: 'center',marginTop: 10}}>Yashin do Nascimento dos Santos</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
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