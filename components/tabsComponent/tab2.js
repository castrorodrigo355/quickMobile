import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon } from 'native-base';
import Users from "../users/users";

const Tab2 = () => {

    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Users</Title>
                </Body>
                <Right/>
            </Header>
            <Content>
                <Users/>
            </Content>
        </Container>
        // <View style={styles.container}>
            
        // </View>
    )
}

export default Tab2;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "gray",
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
