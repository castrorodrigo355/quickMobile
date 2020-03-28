import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, Badge, Text, Icon, Button } from "native-base";

const Tab5 = () => {

    return (
        <Container>
            {/* <Header /> */}
            <Content>
                <Badge>
                    <Text>2</Text>
                </Badge>
                <Badge primary>
                    <Text>2</Text>
                </Badge>
                <Badge success>
                    <Text>2</Text>
                </Badge>
                <Badge info>
                    <Text>2</Text>
                </Badge>
                <Badge warning>
                    <Text>2</Text>
                </Badge>
                <Badge danger>
                    <Text>2</Text>
                </Badge>
                <Badge primary>
                    <Icon name="star" style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}/>
                </Badge>
                <Badge style={{ backgroundColor: 'black' }}>
                    <Text style={{ color: 'white' }}>1866</Text>
                </Badge>
                <Button>
                    <Text>Click Me!</Text>
                </Button>
            </Content>
        </Container>
    )
}

export default Tab5;

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
