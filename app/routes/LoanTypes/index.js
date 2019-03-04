import React, { Component } from 'react';

import { Container } from 'native-base';

import { View, ScrollView, Text, Image, StatusBar, Animated, TouchableOpacity, AsyncStorage, Dimensions, BackHandler, ActivityIndicator } from 'react-native';

import { Actions } from 'react-native-router-flux';


import { Dropdown } from 'react-native-material-dropdown';

import styles from './styles';
export default class Bankrupts extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let data = [{
            value: 'Adjustable',
        }, {
            value: 'Fixes',
        }];

        return (

            <View style={{
                flex: 1,
                alignItems: 'stretch', elevation: 5, borderRadius: 15, padding: 10
            }}>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>What is your desired Loan type</Text>
                    </View>

                </View>
                <View>
                    <Dropdown
                        label='Select   '
                        data={data}
                    />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ width: 150, padding: 5 }} onPress={() => Actions.Bankrupts()}>
                        <Text style={{ fontSize: 20, borderWidth: 1, borderColor: '#eee', backgroundColor: 'green', textAlign: 'center' }}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 150, backgroundColor: 'green', padding: 5 }} onPress={() => Actions.Veteran()}>
                        <Text style={{ fontSize: 20, borderWidth: 1, borderColor: '#eee', backgroundColor: 'green', textAlign: 'center' }}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}