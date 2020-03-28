import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyAccordion from '../accordion/accordion';

const Tab4 = () => {

    return (
        <View style={styles.container}>
            <MyAccordion/>
        </View>
    )
}

export default Tab4;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0A259F",
        height: "100%",
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
