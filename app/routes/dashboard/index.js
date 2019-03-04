import React, { Component } from 'react';
import { Container } from 'native-base';
import { View, ScrollView, Text, Image, StatusBar, Animated, TouchableOpacity, AsyncStorage, Dimensions, BackHandler, ActivityIndicator } from 'react-native';
import AnimateNumber from 'react-native-animate-number';
import styles from './styles';
import { Actions } from 'react-native-router-flux';
export default class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={[styles.myMContainers, styles.commonMContainer]} >
                <Text style={styles.headingContentText} >My Activity</Text>

                <View style={styles.myactivitystyles}>
                    <View style={styles.innerContentBox}>
                        <Text adjustsFontSizeToFit style={styles.TopHeadingTextStyle} >Pick Your Loan Type</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View>
                            <TouchableOpacity onPress={() => Actions.PropertyType()}>
                                <Image source={require('../../images/buttons-refi22.png')} style={styles.logoStyle} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => Actions.PropertyType()}>
                                <Image source={require('../../images/buttons-purchase22.png')} style={styles.logoStyle} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => Actions.PropertyType()}>
                            <Text style={{ padding: 20, color: 'white', backgroundColor: 'green', textAlign: 'center' }}>NEXT</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        );
    }
}