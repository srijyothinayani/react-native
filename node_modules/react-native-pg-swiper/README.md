# react-native-pg-swiper

Page Swiper component for React Native.

## Getting Started

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Properties](#properties)
- [Examples](#examples)

### Installation

```bash
$ npm i react-native-pg-swiper --save
```

```bash
$ yarn add react-native-pg-swiper
```

### Basic Usage

- Edit your `app.js`, like this:

```jsx
import React from 'react';
import Swiper from 'react-native-pg-swiper';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

changePage(index) {
  this.refs.swiper.changePage(index);
}

class Swiper extends React.Component {
  render() {
    return (
      <Swiper ref='swiper' style={styles.wrapper}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>

        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>

        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    );
  }
}

AppRegistry.registerComponent('swiper', () => Swiper);
```

### Properties

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| index | `0` | `number` | Index number of initial slide. |
| pager | `true` | `boolean` | Show pager. |
| onPageChange |  | `function` | Callback when page changes. |
| activeDotColor | `blue` | `string` | CSS color of the dot for the current page. |
| threshold | `25` | `number` | Threshold before the swiper captures the pan responder |
| disableLastSwipe | `false` | `boolean` | Disable Swipe effect on start and end page |
| ref | `` | `string` | Give Reference to Swiper to use changePage method |

#### method
| Prop  | params  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| changePage | index | `function` | Change To Particular Page. Usage this.refs.swiper.changePage(index); |

### Examples

See code in [examples](https://github.com/wadehrarshpreet/react-native-pg-swiper/tree/master/examples/swiper).
