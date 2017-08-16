/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';

import {login} from "./../../actions/login"


class Main extends Component {

  constructor(props){
      super(props);
      this.press = this.press.bind(this);
  }
  press = ()=>{
    console.log("111");
    this.props.dispatch(login());
  }
  render() {
    return (
      <View>
        <Text onPress={this.press}>{this.props.user}</Text>
      </View>
    );
  }
}
function select(store){
    return {
        loginIn : store.login.loginIn,
        user    : store.login.user
    }
}

export default connect(select)(Main);