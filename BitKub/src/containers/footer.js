import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Footer extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Footer
                </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 14, // take 38% of the screen height
        backgroundColor: '#FFFFFF',
    }, 
    text: {
        color: '#FE9E34',
        fontFamily: 'Avenir',
        fontSize: 16,
        fontWeight: '900',
        justifyContent: 'center',
        textAlign: 'center',
        flex: 1,
    },
});