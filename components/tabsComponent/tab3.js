import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Button, Content, ActionSheet, Text } from "native-base";
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';


const Tab3 = () => {

    const BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
    const CANCEL_INDEX = 4;
    const DESTRUCTIVE_INDEX = 3;

    const[state, setState] = useState({});

    return (
        <Container>
            <Header />
            <Content padder>
                <Button
                    onPress={() =>
                        ActionSheet.show(
                        {
                            options: BUTTONS,
                            cancelButtonIndex: CANCEL_INDEX,
                            destructiveButtonIndex: DESTRUCTIVE_INDEX,
                            title: "ActionSheet"
                        },
                        buttonIndex => {
                            // setState({clicked: BUTTONS[buttonIndex]})
                        }
                    )}
                >
                    <Text>Actionsheet</Text>
                </Button>
            </Content>
        </Container>
    )
}

export default Tab3;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#BD174E",
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
