import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        // Toggle the state every second
        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
        }, 10000);
    }
    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
          <View style={styles.container}>
            <Text>{display}</Text>
          </View>
        );
    }
}

export default class BlinkApp extends Component {
    render() {
        let pic = { uri: 'http://placehold.it/200x200' };
        return (
            <View style={styles.container}>
              <View style={styles.header}>
                <Image source={pic} style={{width: 250, height: 250}} />
              </View>
              <View style={styles.content}>
                <Blink text='I love to blink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />
              </View>
              <View style={styles.footer}>
                <Text>Footer Text</Text>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#ccc',
        flex: 1,
    },
    content: {
        backgroundColor: 'powderblue',
        flex: 2,
    },
    footer: {
        backgroundColor: 'steelblue',
        flex: 3,
    }
});