import React, {Component} from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

import Header from './component/Header';

class Blink extends Component {
  constructor(){
    super();
    this.state = {show: true};
    // Toggle the state at each interval
    setInterval(()=>{
      this.setState((previousState)=>{
        return{show: !previousState.show}
      });
    },3000);
  }

  render(){
    let display = this.state.show ? this.props.blink: '';
    return(
      <View>
        <Text>{display}</Text>
      </View>
    );
  }
}
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
      this.setState({title:"!!!!Change State,,"});
    }, 2000);

    //var list = [<Header />,<Header />,<Header />,];
    // From return <Blink blink = "This should blink every 3 sec" />
      return(
        <View style ={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}>
        <Header style = {styles.style1} te = {this.state.title} name = {"Not telling you"} />
        <Header te = {"title"} name = {"GGGGGGGG"} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <Text style = {styles.style2}>{this.state.name}{this.name} {this.getValue(1)} </Text>
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  style1:{
    backgroundColor: 'red',
    color: 'blue',
    fontSize: 21,
    alignItems: 'center',
    marginRight: 10, paddingTop: 20,
  },
  style2:{
    color: 'green',
  },
});
