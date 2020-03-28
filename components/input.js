import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const Input = props => {
    return (
        <TextInput {...props} style={{...styles.input, ...props.style}}>
            {props.children}
        </TextInput>
    )
}

export default Input;

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        marginVertical: 10,
    }
});
