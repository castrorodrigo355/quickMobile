import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Form from "../form/form";

const Tab1 = () => {

    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Form</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Right>
            </Header>
            <Content>
                <Form/>
            </Content>
            <Footer>
                <FooterTab>
                    <Button full style={styles.fullButton}>
                        <Text>Footer</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    )
}

export default Tab1;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#156D8F",
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
    fullButton: {
        backgroundColor: "#16A4D9"
    }
});
