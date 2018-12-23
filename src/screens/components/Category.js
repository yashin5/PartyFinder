import React, {Component} from 'react'
import {Image, View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import Banner from './Banner'

const width = Dimensions.get('window').width

export default class Category extends Component{

    render(){
        return(
            <View style={styles.categoriesContainer}>
                <View style={styles.categoriesTitle}>
                    <Text> Categorias</Text>
                    <Text> Ver todas  -></Text>
                </View>
                <View style={styles.navCategories}>
                     {this.props.categories.map((category, index) =>(
                     <TouchableOpacity onPress={()=> this.props.filter(category)} key={index}>
                         <View>
                             <Image source={category.icon}/>
                             <Text style={styles.navCategoriesText}>{category.name}</Text>
                         </View>
                     </TouchableOpacity>
                 ))}

                </View>

            </View>
            
        );
    };
};

const styles = StyleSheet.create({
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
})