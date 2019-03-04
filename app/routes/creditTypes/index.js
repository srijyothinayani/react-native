import React, { Component } from 'react';

import { Container } from 'native-base';

import { View, ScrollView, Text, Image, StatusBar, Animated, TouchableOpacity, AsyncStorage, Dimensions, BackHandler, ActivityIndicator } from 'react-native';

import { Actions } from 'react-native-router-flux';

import AnimateNumber from 'react-native-animate-number';

import styles from './styles';
export default class CreditTypes extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'stretch', elevation: 5, borderRadius: 20, padding: 10
            }}>

                <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>How is your Credit ?</Text>
                    </View>

                </View>

                <View style={{ flex: 0.5, flexDirection: 'column', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ width: 150, padding: 5 }} onPress={() => Actions.PropertyValue()}>
                            <Text style={{ fontSize: 20, borderWidth: 1, borderColor: '#eee', textAlign: 'center' }}>Excellent</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 150, padding: 5 }} onPress={() => Actions.PropertyValue()}>
                            <Text style={{ fontSize: 20, borderWidth: 1, borderColor: '#eee', textAlign: 'center' }}>Fair</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ width: 150, padding: 5 }} onPress={() => Actions.PropertyValue()}>
                            <Text style={{ fontSize: 20, borderWidth: 1, borderColor: '#eee', textAlign: 'center' }}>Good</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 150, padding: 5 }} onPress={() => Actions.PropertyValue()}>
                            <Text style={{ fontSize: 20, borderWidth: 1, borderColor: '#eee', textAlign: 'center' }}>Poor</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{}}>

                        <TouchableOpacity style={{ padding: 5 }} onPress={() => Actions.CreditTypes()}>
                            <Text style={{ textAlign: 'center', justifyContent: 'center', width: 150, fontSize: 20, backgroundColor: 'green', color: '#fff', borderWidth: 1, borderColor: '#eee', textAlign: 'center' }}>Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}