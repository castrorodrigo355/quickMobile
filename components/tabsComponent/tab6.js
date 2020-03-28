import React, { useState } from "react";
import { StyleSheet, View, Modal, Button, Text } from "react-native";
import Form2 from "../form/form2";

const Tab6 = () => {
    
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(c => !c);

  return (
    <View style={styles.container}>
      <Button
        onPress={() => setOpen(true)}
        title="Open Modal"
        full
        style={styles.fullButton}
      />
      <Form2 open={open} closeModal={closeModal} />
      
    </View>
  );
};

export default Tab6;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "tomato",
    height: "100%"
    // flex: 1,
    // position: "absolute",
    // marginTop: 60,
    // width: "100%",
    // // height: "90%",
    // borderColor: "white",
    // borderStyle: "dashed",
    // borderWidth: 1,
  },
  fullButton: {
    backgroundColor: "white",
    color: "black"
  },
  myModal: {
    paddingTop: 40,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
});
