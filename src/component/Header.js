import React, {Component} from 'react';
import {View,Image} from 'react-native';

export default class Header extends Component {
  render(){
    let pic = {
      uri: 'https://static.pexels.com/photos/176837/pexels-photo-176837.jpeg'
    };
      return(
        <View>
        <Image source = {pic} style={{width: 193, height: 110}} />
        </View>
    );
  }
}
