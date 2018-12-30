import React, {Component} from 'react'
import {ImageBackground, Text, View} from 'react-native';

export default class Background extends Component{
    render(){
        return(
            <View style={{flex: this.props.flex? 1:null,
                width: this.props.width,
                height: this.props.height? this.props.height:null}}
            >
                <ImageBackground 
                    style={ this.props.imgBackground }
                    resizeMode="cover"
                    source={this.props.backgroundImage}
                />
                <View style={this.props.backgroundTextContainer}>
                {this.props.text.map((text, index) =>(
                    <Text key={index} style={this.props.titleText}>{text}</Text>
                ))}
                {!this.props.text2? null:
                    <Text style={this.props.contentText}>{this.props.text2}</Text>}
                </View>
            </View>
        );
    };
};