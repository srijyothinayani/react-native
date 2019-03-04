

import React, { Component } from 'react';

import { Container, Item, Input, Toast } from 'native-base';

import { View, ScrollView, Text, Image, StatusBar, TouchableOpacity, AsyncStorage, Dimensions, BackHandler, ActivityIndicator } from 'react-native';

import { Actions } from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/FontAwesome';

import config from '../../config/config.json';

import styles from './styles';
const { width, height } = Dimensions.get('window');
const deviceType = 'Phone';//services.getDevice(width, height);
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skipCount: 0,
      email: null,
      password: null,
      isVisible: false,
      eyeIcon: 'eye-slash',
      left: (width / 2) - 50,
      top: (height / 2) - 100,
      isPasswordShow: true,
      selectSignIn: true
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      Actions.homePage();
      return true;
    });
    AsyncStorage.getItem('skip').then((value) => {
      if (value) {
        let a = JSON.parse(value);
        this.setState({ skipCount: a.count });
      }
    });
  }

  submit = () => {
    let _self = this;
    _self.setState({ selectSignIn: false });
    const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(_self.state.email);
    if (_self.state.email === null || _self.state.email === '' || !isEmailValid) {
      if (_self.state.email === null || _self.state.email === '') {
        _self.setState({ selectSignIn: true });
        _self.alertMessage('Please enter email');
      } else {
        _self.setState({ selectSignIn: true });
        _self.alertMessage('Please enter valid email');
      }
    } else if (_self.state.password === null || _self.state.password === '') {
      _self.setState({ selectSignIn: true });
      _self.alertMessage('Please enter password');
    } else if (_self.state.password.length < 4) {
      _self.setState({ selectSignIn: true });
      _self.alertMessage('Please enter valid password');
    } else {
      _self.setState({ isVisible: true });
      Actions.Dashboard();
    }
  }

  _render = () => {
    return (
      <View style={styles.linkedInLoginButton}>
        <Icon name="linkedin" color="white" size={deviceType === 'Phone' ? 25 : 30} />
      </View>
    );
  }

  alertMessage = (msg) => {
    Toast.show({
      supportedOrientations: ['portrait', 'landscape'],
      text: msg,
      position: 'bottom',
      buttonText: 'OK',
      duration: 2000
    });
  }

  render() {
    return (
      <Container>
        <ScrollView contentContainerStyle={styles.mainContainer}>
          <StatusBar
            backgroundColor={styles.defaultColor}
            barStyle="light-content"
          />
          {!this.state.isVisible ?
            <View style={styles.defaultContainer}>
              <View style={styles.imageView}>
                <Image source={require('../../images/logo-desktop.png')} style={styles.logoStyle} />
               
              </View>
              <View style={styles.customLoginView}>
                <Item rounded style={styles.itemStyle}>
                  <Icon style={styles.iconSpace} size={deviceType === 'Tablet' ? 30 : 20} name="user" />
                  <Input style={styles.textBoxStyle} placeholder="Email" placeholderTextColor="#d3d3d3" keyboardType={"email-address"} onChangeText={(text) => this.setState({ email: text })} />
                </Item>
                <Item rounded style={styles.itemStyle}>
                  <Icon style={styles.iconSpace} size={deviceType === 'Tablet' ? 30 : 20} name="lock" />
                  <Input style={styles.textBoxStyle} placeholder="Password" placeholderTextColor="#d3d3d3" secureTextEntry={this.state.isPasswordShow} onChangeText={(text) => this.setState({ password: text })} />
                
                </Item>
                <TouchableOpacity style={this.state.selectSignIn ? styles.signInSelectButton : styles.signInUnSelectButton} onPress={() => this.submit()} >
                  <Text style={this.state.selectSignIn ? styles.signInSelectButtonColor : styles.signInUnSelectButtonColor}>Sign in</Text>
                </TouchableOpacity>
              </View>
            </View> :
            <View style={styles.spinnerContainer}>
              <ActivityIndicator isVisible={this.state.isVisible} size={'large'} color={styles.defaultColor} />
            </View>}
        </ScrollView>
      </Container>
    );
  }
}