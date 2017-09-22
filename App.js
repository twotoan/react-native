import React, { Component } from 'react';
import { View, StyleSheet, Button, TextInput, Text, Image } from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styles.content}>
                <Header></Header>
                <Login></Login>
                <Footer></Footer>
            </View>
        )
    }
}

export class Login extends Component {
    render() {
        return (
            <View>
                <TextInput placeholder="Email Address" style={styles.input}/>
                <TextInput placeholder="Name" style={styles.input} />
                <Button title="Submit" accessibilityLabel="Submit Details" style={styles.buttonStyle} onPress={null}>Submit</Button>
            </View>
        )
    }
}

export class Questions extends Component {

}

export class Scores extends Component {

}

export class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text>ABC123</Text>
            </View>
        )
    }
}
export class Footer extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text>ABC123</Text>
            </View>
        )
    }
}

export class BackgroundImage extends Component {
    render() {
        const resizeMode = 'cover';

        return (
            <Image
                style={{
                    flex: 1,
                    resizeMode,
                }}
                source={{ uri: "./images/galaxy-wallpaper-30.jpg" }}
            />
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#00A2B2',
        padding: 20,
        textAlign: 'center',
    },
    content: {
        backgroundColor: '#FFCEAA',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    buttonStyle: {
        backgroundColor: '#B24B00',
    },
    footer: {
        backgroundColor: '#19EAFF',
        padding: 20,
        textAlign: 'center',
    },
    input: {
        margin: 20,
        textAlign: 'center',
        backgroundColor: '#ccc',
        padding: 20,
    }
});


