import React, { useState, useContext } from 'react';
import GlobalStateContext from "../../context/appContext";
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { addUser } from '../../context/actions';

const Form = () => {

    const[state, dispatch] = useContext(GlobalStateContext);

    const[name, setName] = useState("");
    const[userName, setUserName] = useState("");

    const onAddUser = () => {
        const newUser = { name, userName }
        dispatch(addUser(newUser));
        setName("");
        setUserName("");
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.itemText}
                placeholder="Name..."
                onChangeText={ x => setName(x)}
                value={name}
            />
            <TextInput style={styles.itemText}
                placeholder="Username..."
                onChangeText={ x => setUserName(x)}
                value={userName}
            />
            <Button title="Press To Create User" color="white"
                onPress={() => onAddUser()}/>
        </View>
    )
}

export default Form;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"column",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 30,
        width: "100%",
    },
    itemText: {
        padding: 10,
        margin: 15,
        width: "90%",
        backgroundColor:"white",
        color: "black",
        borderColor: "white",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 50,
    }
});
