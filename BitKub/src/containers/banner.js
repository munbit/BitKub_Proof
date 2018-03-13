import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Banner extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    BITKUB
                </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 6, // take 38% of the screen height
        backgroundColor: '#FFFFFF',
    }, 
    text: {
        color: '#FE9E34',
        fontFamily: 'Avenir',
        fontSize: 32,
        fontWeight: '900',
        justifyContent: 'center',
        textAlign: 'center',
        flex: 1,
    },
});