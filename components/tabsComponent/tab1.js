import React from 'react';
import { StyleSheet, View, Text, FlatList, Button } from 'react-native';

const Tab1 = () => {

    return (
        <View style={styles.container}>
            <Text>1</Text>
        </View>
    )
}

export default Tab1;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#156D8F",
        height: "100%"
        // flex: 1,
        // position: "absolute",
        // marginTop: 60,
        // width: "100%",
        // // height: "90%",
        // borderColor: "white",
        // borderStyle: "dashed",
        // borderWidth: 1,
    }    
});
