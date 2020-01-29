import React from "react";
import {View, Text, StyleSheet} from "react-native";

const Footer = props => {
    return (
        <View style={styles.footer}>
            <Text>Well, hello world!</Text>
            <Text>And good day to you ;)</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: '10%',
        backgroundColor: 'grey',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Footer;
