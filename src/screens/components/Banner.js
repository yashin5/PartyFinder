import React, {Component} from 'react'
import {Image, View, Text, StyleSheet, Dimensions} from 'react-native'
const width = Dimensions.get('window').width

export default class Banner extends Component{
    render(){
        return(            
            <React.Fragment>
                {this.props.filter().map((event, index) =>(
                    <React.Fragment key={index}>
                        <View style={styles.showBannerContainer} >
                            <Image style={this.props.showBanner? 
                                this.props.showBanner:styles.showBanner} 
                                source={event.bannerImage} 
                            />
                        </View>
                        <View style={styles.showBannerContainer2}>
                                <View style={styles.showBannerTextContainer}>
                                    <Text style={styles.showBannerTextDate}>{event.date}</Text>
                                    <Text style={styles.showBannerTextShow}>{event.name}</Text>
                                </View>
                                <View>
                                    <Text style={styles.showBannerTextPeople}>{event.people} <Image source={require('../../img/people.png')} /></Text>
                                </View> 
                        </View>
                    </React.Fragment> 
                ))}
            </React.Fragment> 
        );
    };
};

const styles = StyleSheet.create({
    showBannerContainer: {
        marginTop: 18,
        alignItems: 'center',
     },
     showBannerContainer2: {
        flexDirection: 'row', 
        justifyContent:'space-between',
        width: width-30
     },
     showBanner: {
        backgroundColor: 'black',
        opacity: 0.6,
        position: 'absolute',
        borderRadius: 10,
        width: width-30,
        height: width-300
     },
     showBannerTextContainer: {
        marginLeft: 9,
        marginTop: 9,
        marginBottom: 68
     },
     showBannerTextDate: {
        color: 'white',
         fontSize: 12
     },
     showBannerTextShow: {
         color: 'white',
         fontSize: 14
     },
     showBannerTextPeople: {
         marginRight: 9,
         color: 'white',
         margin: 2,
         fontSize: 11
     }
})