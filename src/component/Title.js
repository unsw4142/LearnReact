import React, {Component} from 'react';
import {View, Text,Image} from 'react-native';

export default class Title extends Component {
    render(){
      return(
        <View>
        <Text style ={this.props.style} > {this.props.ti}</Text>
        </View>
    );
  }
}
