import React, {Component} from 'react'
import {TouchableOpacity, View, Text, StyleSheet, Dimensions} from 'react-native'
const width = Dimensions.get('window').width

export default class Navegation extends Component{
    render(){
        return (
            <View style={styles.nav}>
                {this.props.filter.map((filter, index) =>(
                    <TouchableOpacity onPress={() => this.props.filtering(filter)} key={index}>
                        <View>
                            {this.props.onPressFilter == filter?
                                <Text style={styles.selectText}> {filter}</Text>
                                : <Text style={[styles.navText]}> {filter}</Text>
                            }
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        );
    };
};

const styles =StyleSheet.create({
    nav: {
        width: width-1,
        backgroundColor: 'white',
        borderRadius: 100,
        marginTop: 38,
        marginBottom: 8,
        padding: 9,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    navText: {
    },
    selectText: {
        color: 'black', fontWeight: '400'
    }
})