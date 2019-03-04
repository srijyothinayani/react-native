import React, { Component } from 'react';

import { Container } from 'native-base';

import { View, ScrollView, Text, Image, StatusBar, Animated, TouchableOpacity, AsyncStorage, Dimensions, BackHandler, ActivityIndicator, Slider } from 'react-native';

import { Actions } from 'react-native-router-flux';

import AnimateNumber from 'react-native-animate-number';

import styles from './styles';

// drop area Component


export default class PropertyValue extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            volume: 0
        }
    }

    handleOnChange = (value) => {
        this.setState({
            volume: value
        })
    }

    render() {
        let { volume } = this.state
        return (
            <View style={{ flex: 1 }}>
                <View style={{}}>
                    <Text style={{ textAlign: 'center' }}>Mortgage Balance</Text>
                </View>
                <View style={{ width: 200 }}>
                    <RangeSlider min={10} max={10000} initialStart={10} initialEnd={10} color="red" />
                </View>
            </View>
        )
    }
}

class RangeSlider extends Component {
    state = {
        startLabel: this.props.initialStart,
        endLabel: this.props.initialEnd,
        start: this.props.initialStart,
        end: this.props.initialEnd
    }

    render() {
        const { color, min, max } = this.props;
        const { start, end, startLabel, endLabel } = this.state;

        return (
            <View>

                <View style={styles.sliders}>
                    <Slider style={styles.endSlider} onValueChange={this.handleEndValueChange} onSlidingComplete={this.handleEndSlidingComplete} value={end} step={1} minimumValue={min} maximumValue={max} thumbTintColor={color} minimumTrackTintColor={color} maximumTrackTintColor="transparent" />

                </View>
                <View style={{}}>
                    <Text style={styles.sliderLabels}>$ {endLabel}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ width: 150, padding: 5 }} onPress={() => Actions.PropertyType()}>
                        <Text style={{ fontSize: 20, borderWidth: 1, borderColor: '#eee', backgroundColor: 'green', textAlign: 'center' }}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 150, backgroundColor: 'green', padding: 5 }} onPress={() => Actions.InterestRates()}>
                        <Text style={{ fontSize: 20, borderWidth: 1, borderColor: '#eee', backgroundColor: 'green', textAlign: 'center' }}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    asInverse(num) {
        const { min, max } = this.props;
        const numInverse = min + (max - num);
        return numInverse;
    }
    asForward(numInverse) {
        const { min, max } = this.props;
        const num = -numInverse + min + max;
        return num;
    }

    handleStartValueChange = (startInverse) => {
        const start = this.asForward(startInverse);
        this.setState(() => ({ startLabel: start }));
    }
    handleStartSlidingComplete = (startInverse) => {
        const start = this.asForward(startInverse);
        this.setState(() => ({ start }));
    }

    handleEndValueChange = end => this.setState(() => ({ endLabel: end }))
    handleEndSlidingComplete = end => this.setState(() => ({ end }))
}


