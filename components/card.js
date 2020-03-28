import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    card: {
        // width: 300,
        // maxWidth: "80%",
        // alignItems: "center",
        justifyContent: "center",
        fontSize: 15,
        padding: 10,
        shadowOffset: { width: 0, height : 2 },
        shadowRadius: 6,
        elevation: 8,
        shadowOpacity: 0.26,
        backgroundColor: "white"
    }
});
