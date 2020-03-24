import React, { useContext } from 'react';
import GlobalStateContext from "../../context/appContext";
import { StyleSheet, View, FlatList } from 'react-native';
import User from "./user";

const Users = () => {

    const[state, dispatch] = useContext(GlobalStateContext);
    const { users } = state;

    return (
        <View style={styles.container}>
            <FlatList data={users}
                    renderItem={({item, index}) => <User user={item} 
                                                         index={index}/>}
                    keyExtractor={(item, index) => index.toString()}
                />
        </View>
    )
}

export default Users;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute",
        marginTop: 60,
        width: "100%",
        // height: "90%",
        borderColor: "white",
        borderStyle: "dashed",
        borderWidth: 1,
    }    
});