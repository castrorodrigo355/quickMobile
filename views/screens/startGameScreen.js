import React, { useState } from "react";
import { StyleSheet, View, Text, Alert, Button, Keyboard, TouchableWithoutFeedback } from "react-native";
import Card from "../../components/card";
import Input from "../../components/input";
import NumberContainer from "../../components/numberContainer";

const StartGameScreen = () => {

    const[value, setValue] = useState('');
    const handleChange = text => setValue(text.replace(/[^0-9]/g, ''));

    const[confirmed, setConfirmed] = useState(false);
    const[selectedNumber, setSelectedNumber] = useState();

    const resetValue = () => {
        setValue('');
        setConfirmed(false);
    }
    const confirmValue = () => {
        const chosenNumber = parseInt(value);
        if(isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99){
            Alert.alert('Invalid Number ! ', 
                        'Number has to be a number between 1 and 99',
                        [{
                            text: 'Okay',
                            style: 'destructive',
                            onPress: resetValue}])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setValue('');
        Keyboard.dismiss();
    };

    const confirmedOutput = confirmed &&
        <Card style={styles.summaryContainer}>
            <Text>Number Selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title="START GAME"/>
        </Card>

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start Game Screen</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input  placeholder="Type here to translate!"
                        maxLength={2} 
                        keyboardType="numeric"
                        style={styles.input} 
                        onChangeText={handleChange}
                        value={value}
                    />
                <View style={styles.btnContainer}>
                    <View style={styles.buttonItem}>
                    <Button color="#D72A5A" title="Reset" onPress={() => resetValue()}/>
                    </View>
                    <View style={styles.buttonItem}>
                    <Button color="#D72A5A" title="Confirm" onPress={() => confirmValue()} />
                    </View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
      </TouchableWithoutFeedback>
    
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
    // fontSize: 15,
    // padding: 10,
    // shadowOffset: { width: 0, height : 2 },
    // shadowRadius: 6,
    // elevation: 8,
    // shadowOpacity: 0.26,
    // backgroundColor: "white"
  },
  btnContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderRadius: 40
  },
  buttonItem: {
    width: 100
    // backgroundColor: "white"
  },
  input: {
    width: 50,
    textAlign: "center"
  },
  summaryContainer: {
      marginTop: 20,
      borderRadius: 10,

  }
});
