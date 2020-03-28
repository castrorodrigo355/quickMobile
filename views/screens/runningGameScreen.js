import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const randonNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    min = Math.floor(max);
    const random = Math.random() * (max-min) + min;
    if(random === exclude){
        return randonNumber(min, max, exclude);
    }else{
        return random;
    }
}

const RunningGameScreen = props => {

    const[currentGuess, serCurrentGuess] = 
        useState(randonNumber(1,100, props.userChoice))

    return (
        <View style={styles.container}>
            <Text>Opponents's Guess</Text>
        </View>
    )
}

export default RunningGameScreen;

const styles = StyleSheet.create({
    container: {}
});
