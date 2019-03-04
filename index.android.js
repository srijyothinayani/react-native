import React, { Component } from 'react';

import {
  AppRegistry
} from 'react-native';

import Setup from './app/setup';

export default class AffordAbility extends Component {
  render() {
    return (
     <Setup />
    );
  }
}


AppRegistry.registerComponent('AffordAbility', () => AffordAbility);
