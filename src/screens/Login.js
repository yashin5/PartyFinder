import React, {Component} from 'react'
import {ScrollView, Dimensions, View, StyleSheet} from 'react-native';
//Component
import Navigation from './components/Navegation'
import Category from './components/Category'
import Banner from './components/Banner'
import Background from './components/Background'


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class Login extends Component{
    constructor(){
        super();
        this.state = {
            filter: ['PROXIMIDADES', 'EM ALTA', 'FUTUROS', 'TODOS'],
            category:[{
                name: 'Baladas',
                icon: require('../img/dancing.png')
            },
            {   
                name: 'Rave',
                icon: require('../img/dj.png')
            },
            {   
                name: 'Rock',
                icon: require('../img/rock.png')
            },
            {   
                name: 'Cinema',
                icon: require('../img/ticket.png')
            }],
            events: [{
                name: 'MATANZA',
                date: '22 de Dezembro',
                people: 45000,
                bannerImage: require('../img/show.jpg')
            },
            {
                name: 'MATANZA',
                date: '22 de Dezembro',
                people: 45000,
                bannerImage: require('../img/party.jpg')
            }]
        };
    };
    static navigationOptions = {
        header: null
      };
    
    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Background
                        width={width} 
                        imgBackground={styles.imgBackground}
                        titleText={styles.titleText}
                        backgroundTextContainer={styles.backgroundTextContainer}
                        text={["EAT.", "SLEEP.", "RAVE.", "REPEAT."]}
                        backgroundImage={require('../img/party2.jpg')}/>
                    <React.Fragment>
                        <Navigation filter={this.state.filter} />
                    </React.Fragment>
                    <React.Fragment>
                        <Category categories={this.state.category}/>
                    </React.Fragment>
                    <Banner events={this.state.events}/>
                </View>
            </ScrollView>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        height: height+height/2,
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    backgroundTextContainer: {
        width: '100%',
        marginTop: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    imgBackground: {
        position: 'absolute',
        width: width,
        height: width-140,
        flex: 1, 
        opacity: 0.9,
    },
    titleText: {
        fontSize: 32,
        color: '#DCDCDC',
        fontWeight: 'bold',
    },
});
  