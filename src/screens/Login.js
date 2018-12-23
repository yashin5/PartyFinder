import React, {Component} from 'react'
import {ScrollView, Dimensions, View, StyleSheet} from 'react-native';
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
            filterCategory:'',
            filter: 'PROXIMIDADES',
            category:[{
                name: 'Baladas',
                icon: require('../img/dancing.png'),
            },
            {   
                name: 'Rave',
                icon: require('../img/dj.png'),
            },
            {   
                name: 'Rock',
                icon: require('../img/rock.png')
            },
            {   
                name: 'Cinema',
                icon: require('../img/ticket.png')
            }],
            events: ''
        };
    };
    static navigationOptions = {
        header: null
      };
    
    componentWillMount(){
        return this.setState({events:
            [{
                name: 'MATANZA',
                date: '22 de Dezembro',
                people: 45000,
                bannerImage: require('../img/party.jpg'),
                type: 'Rock',
                locate: 'Rio de Janeiro'
            },
            {
                name: 'OPAOPA',
                date: '22 de Dezembro',
                people: 45000,
                bannerImage: require('../img/show.jpg'),
                type: 'Rock',
                locate: 'Rio de Janeiro'
            },
            {
                name: 'AXÉ',
                date: '22 de Dezembro',
                people: 45000,
                bannerImage: require('../img/party.jpg'),
                type: 'Baladas',
                locate: 'São Paulo'
            }]
        });
    };
    filtering = (target) =>{
        this.setState({filter: target});
    };
    filterCategory = (category) =>{
        if(category.name === this.state.filterCategory){
            this.setState({filterCategory: ''})
        }
        else{
            this.setState({filterCategory: category.name})
        };
    };

    filterCategoryShows =() =>{
 
        switch (this.state.filter) {
            case "PROXIMIDADES":
                return this.state.filterCategory?
                    this.state.events.filter(event =>{
                        return event.type === this.state.filterCategory && event.locate === "Rio de Janeiro"
                    })
                    :
                    this.state.events.filter(event =>{ 
                        return event.locate === "Rio de Janeiro"});

            case "TODOS":
                return this.state.filterCategory?
                    this.state.events.filter(event =>{
                        return event.type === this.state.filterCategory
                    })
                    :
                    this.state.events
            default:
                 return this.state.events
        };
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
                        backgroundImage={require('../img/party2.jpg')}
                    />
                    <React.Fragment>
                        <Navigation filtering={this.filtering} onPressFilter={this.state.filter} filter={["PROXIMIDADES", "EM ALTA", "FUTUROS", "TODOS"]} />
                    </React.Fragment>
                    <React.Fragment>
                        <Category  filterCategoryShows={this.filterCategoryShows} 
                            filter={this.filterCategory} 
                            categories={this.state.category}
                        />
                    </React.Fragment>
                    <Banner filterCategory={this.state.filterCategory} 
                        filter={this.filterCategoryShows} events={this.state.events}
                    />
                </View>
            </ScrollView>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        height: height + height / 2 ,
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