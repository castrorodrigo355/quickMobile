import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = ({ title }) => {

  return (
    <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
};

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        width:"100%",
        height: 90,
        paddingTop: 30,
        backgroundColor: "#D72A5A",

        // flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // position: "relative",
    },
    headerTitle: {
        color: "white",
        fontSize: 20,
    }
});
