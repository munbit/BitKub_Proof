// @flow

import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import Chart from '../containers/chart';
import Ranges from '../containers/ranges';
import Symbols from '../containers/symbols';
import Banner from '../containers/banner';
import Footer from '../containers/footer';
import type { Navigation } from '../app';

export default class extends Component {

    props: {
        navigation: Navigation,
    };

    onAddCoin = () => {
        const { navigation } = this.props;
        navigation.navigate('add');
    };

    render() {
        return (
            <View style={styles.container}>
                <Banner />
                <Symbols /> 
                <Chart />
                <Ranges />
                <Footer />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,        // take up the whole screen
        paddingTop: 20, // put content below status bar
        backgroundColor: 'white',
    },
});