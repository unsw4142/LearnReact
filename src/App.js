import React, {Component} from 'react';
import { View, Text, Image} from 'react-native';

import Header from './component/Header';
export default class App extends Component {
  constructor(){
    super();
    this.name = "Rahul";
    this.state = {name:"Real", title: "Hello!!-- Props with state"};
  }
  getValue(ret){
    return " is " + ret;
  }
  render(){
    setTimeout(() => {
      this.setState({name: "NAAH "});
    }, 2000);

    //var list = [<Header />,<Header />,<Header />,];
      return(
        <View>
        <Header te = {this.state.title} name = {"Not telling you"} />
        <Header te = {"title"} name = {"GGGGGGGG"} />
        <Text>{this.state.name}{this.name} {this.getValue(1)} </Text>
        </View>
    );
  }
}
