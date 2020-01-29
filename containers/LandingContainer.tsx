import React, {useEffect, useState} from "react";
import {Alert, Button, StyleSheet, Text, View} from "react-native";

import Footer from "../components/Footer";

const LandingContainer = props => {
    return (
        <View style={styles.landing}>
            <Text>Welcome peeps!</Text>
            <View style={styles.buttons}>
                <Text>We're starting from here. </Text>
                <Button title={'I want news!'} onPress={props.showNews}></Button>
            </View>
            <Footer/>
        </View>
    );
}

const styles = StyleSheet.create({
    landing: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        width: '100%',
        height: '90%',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default LandingContainer;
