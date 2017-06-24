import React, {Component} from 'react';
import {View, Text,Image} from 'react-native';

export default class Title extends Component {
    render(){
      return(
        <View>
        <Text style = {{alignItems: 'center', marginRight: 10,paddingTop: 20,}}> {this.props.ti}</Text>
        </View>
    );
  }
}
