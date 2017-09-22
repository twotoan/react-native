import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Background from 'images/galaxy-wallpaper-30.jpg';

export default class App extends Component {
    render() {
        return (
            <Login></Login>
        )
    }
}

export class Login extends Component {
    render() {
        return (
            <View>
                <Button title="Submit" accessibilityLabel="Submit Details" style={styles.buttonStyle}>Submit</Button>
            </View>
        )
    }
},

export class Questions extends Component {

}

export class Scores extends Component {

}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'blue',
    },
    content: {
        backgroundImage: `url(${Background})`,
    },
    buttonStyle: {
        backgroundColor: 'purple',
    }
});


