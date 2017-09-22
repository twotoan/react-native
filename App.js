import React, { Component } from 'react';
import { View, StyleSheet, Button, TextInput, Text, Image } from 'react-native';

const resizeMode = 'cover';

export default class App extends Component {
    render() {
        return (
            <View style={styles.content}>
                <Image style={{flex: 1,resizeMode}} source={{ uri: "./images/galaxy-wallpaper-30.jpg" }}>
                    <Header></Header>
                    <Login></Login>
                    <Footer></Footer>
                </Image>
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

const styles = StyleSheet.create({
    header: {
        padding: 20,
        textAlign: 'center',
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    buttonStyle: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        backgroundColor:'#fff',
        borderRadius:100,
    },
    footer: {
        padding: 20,
        textAlign: 'center',
    },
    input: {
        margin: 20,
        textAlign: 'center',
        backgroundColor: '#FFF',
        padding: 20,
    }
});


