
import React, { Component } from 'react';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Verification from './components/register/Verification';
import Home from './components/home/Home';
import {HomeStack} from './Router';

import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
} from 'react-native';



export default class App extends Component {
 
  render() {
    return (
        <HomeStack/>
    );
  }
}

