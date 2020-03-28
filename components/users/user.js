import React, { useContext } from 'react';
import GlobalStateContext from "../../context/appContext";
import { StyleSheet, View, Text, Button, TouchableOpacity, TouchableHighlight } from 'react-native';
import { removeUser } from '../../context/actions';

const User = ({user, index}) => {

    const[state, dispatch] = useContext(GlobalStateContext);

    return(
        <TouchableOpacity   activeOpacity={0.2}
                            onPress={() => dispatch(removeUser(index))}
                            >
            <View style={styles.container}>
                <Text style={styles.item}>
                    {user.name}
                </Text>
                <Text style={styles.item}>
                    {user.userName}
                </Text>
                {/* <Button title="x" color="red"
                        style={styles.btnDelete} 
                        /> */}
            </View>
        </TouchableOpacity>
        )
    }

export default User;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10,
        padding: 5,
        backgroundColor: "gray",
        borderRadius: 50
    },
    item: {
        color: "black",
        fontSize: 20,
        marginRight: 30,
        width: "40%",
        // borderColor: "white",
        // borderStyle: "solid",
        // borderWidth: 1,
    },
    // btnDelete: {
    //     borderColor: "white",
    //     borderStyle: "solid",
    //     borderRadius: 60,
    //     borderWidth: 1,
    // }
});
