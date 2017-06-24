import React, {Component} from 'react';
import { View, Text, Image} from 'react-native';

import Header from './component/Header';
export default class App extends Component {
  constructor(){
    super();
    this.name = "Rahul";
  }
  getValue(ret){
    return " is " + ret;
  }
  render(){
      return(
        <View>
        <Header />
        <Text>{this.name} {this.getValue(1)} </Text>
        </View>
    );
  }
}
