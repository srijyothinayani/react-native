import React, { Component } from 'react';

import { Container, Item, Input, Toast } from 'native-base';

import { View, ScrollView, Text, Image, StatusBar, Animated, TouchableOpacity, AsyncStorage, Dimensions, BackHandler, ActivityIndicator } from 'react-native';

import { Actions } from 'react-native-router-flux';

import AnimateNumber from 'react-native-animate-number';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
export default class PropertyInfo extends Component {
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
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Please enter your property information</Text>
                    </View>
                </View>

                <View style={{ flex: 0.5, flexDirection: 'column', alignItems: 'center' }}>
                    <View style={styles.customLoginView}>
                        <Item rounded style={styles.itemStyle}>
                            <Icon style={styles.iconSpace} size={20} name="user" />
                            <Input style={styles.textBoxStyle} placeholder="Full Name" placeholderTextColor="#d3d3d3" />
                        </Item>
                        <Item rounded style={styles.itemStyle}>
                            <Icon style={styles.iconSpace} size={20} name="mail" />
                            <Input style={styles.textBoxStyle} placeholder="Email" placeholderTextColor="#d3d3d3" />

                        </Item>
                        <Item rounded style={styles.itemStyle}>
                            <Icon style={styles.iconSpace} size={20} name="phone" />
                            <Input style={styles.textBoxStyle} placeholder="Phone" placeholderTextColor="#d3d3d3" />
                        </Item>


                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ padding: 5 }} onPress={() => Actions.PropertyInfo()}>
                            <Text style={{ textAlign: 'center', justifyContent: 'center', width: 150, fontSize: 20, backgroundColor: 'green', color: '#fff', borderWidth: 1, borderColor: '#eee', textAlign: 'center' }}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ padding: 5 }} onPress={() => Actions.Estimation()}>
                            <Text style={{ textAlign: 'center', justifyContent: 'center', width: 150, fontSize: 20, backgroundColor: 'green', color: '#fff', borderWidth: 1, borderColor: '#eee', textAlign: 'center' }}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View >

        )
    }
}