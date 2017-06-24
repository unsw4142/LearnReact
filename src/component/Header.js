import React, {Component} from 'react';
import {View,Image} from 'react-native';
import Title from './Title';

export default class Header extends Component {
  render(){
    let pic = {
      uri: 'https://static.pexels.com/photos/176837/pexels-photo-176837.jpeg'
    };
      return(
        <View>
        <Title ti = {this.props.te}/>
        <Image source = {pic} style={{width: 193, height: 110}} />
        </View>
    );
  }
}
