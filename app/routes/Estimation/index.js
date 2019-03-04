import React, { Component } from 'react';

import { Container, Item, Input, Toast } from 'native-base';

import { View, ScrollView, Text, Image, StatusBar, Animated, TouchableOpacity, AsyncStorage, Dimensions, BackHandler, ActivityIndicator } from 'react-native';

import { Actions } from 'react-native-router-flux';

import AnimateNumber from 'react-native-animate-number';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
export default class Estimation extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <View style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'stretch', elevation: 5, borderRadius: 15, padding: 10
            }}>

                <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>We have arranged a free credit score offers from our partners for you.</Text>
                    </View>
                </View>


                <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Also check the below offers for you.</Text>
                    </View>
                </View>

                <View style={{ flex: 0.6, alignItems: 'center' }}>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ padding: 5 }} onPress={() => Actions.PropertyInfo()}>
                            <Text style={{ textAlign: 'center', justifyContent: 'center', height: 100, width: 90, fontSize: 20, color: 'black', borderWidth: 1, borderColor: 'black', textAlign: 'center' }}>offer1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ padding: 5 }} onPress={() => Actions.Dashboard()}>
                            <Text style={{ textAlign: 'center', justifyContent: 'center', height: 100, width: 90, fontSize: 20, color: 'black', borderWidth: 1, borderColor: 'black', textAlign: 'center' }}>offer2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ padding: 5 }} onPress={() => Actions.Dashboard()}>
                            <Text style={{ textAlign: 'center', justifyContent: 'center', height: 100, width: 90, fontSize: 20, color: 'black', borderWidth: 1, borderColor: 'black', textAlign: 'center' }}>offer3</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        )
    }
}