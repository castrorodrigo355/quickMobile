import React, { useState, useContext } from "react";
import GlobalStateContext from "../../context/appContext";
import { StyleSheet, View, Text, TextInput, Button, Modal } from "react-native";
import { addUser } from "../../context/actions";

const Form2 = ({ open, closeModal }) => {

  const [state, dispatch] = useContext(GlobalStateContext);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");

  const onAddUser = () => {
    const newUser = { name, userName };
    dispatch(addUser(newUser));
    setName("");
    setUserName("");
  };

  return (
    <Modal visible={open}>
      <View style={styles.container}>
        <TextInput
          style={styles.itemText}
          placeholder="Name..."
          onChangeText={x => setName(x)}
          value={name}
        />
        <TextInput
          style={styles.itemText}
          placeholder="Username..."
          onChangeText={x => setUserName(x)}
          value={userName}
        />
        <Button
          title="Press To Create User"
          color="black"
          onPress={() => onAddUser()}
        />
        <Button
          title="Cancel Modal"
          color="black"
          onPress={() => closeModal()}
        />
      </View>
    </Modal>
  );
};

export default Form2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    top: 30,
    width: "100%"
  },
  itemText: {
    padding: 10,
    margin: 15,
    width: "90%",
    backgroundColor: "white",
    color: "black",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 50
  },
//   myModal: {
//     paddingTop: 40,
//     // flex: 1,
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center"
//   }
});
