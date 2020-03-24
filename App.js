import React, { useEffect, useReducer } from 'react';
import GlobalStateContext from "./context/appContext";
import { reducer, initialState } from "./context/reducer";
import { StyleSheet, View, Text } from 'react-native';
import { setUsers } from './context/actions';
import { Container, Header, Content, Tab, Tabs, TabHeading, Icon, Right, Left, Body, Title } from 'native-base';
// import * as Font from 'expo-font';
// import { Ionicons } from '@expo/vector-icons';
import InitImage from "./components/initImage/initImage";
import Form from "./components/form/form";
import Users from "./components/users/users";
import Tab1 from "./components/tabsComponent/tab1";
import Tab2 from "./components/tabsComponent/tab2";
import Tab3 from "./components/tabsComponent/tab3";

const App = () => {

  const[state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getUsers(){
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const response = await res.json();
      const usersList = response.map(x => {return({name: x.name, userName: x.username})});
      dispatch(setUsers(usersList.slice(0, 5)));
    }

    getUsers();
  }, [])

  return (
    <GlobalStateContext.Provider value={[state, dispatch]}>
      <View style={styles.container}>
        {/* <Text>
          1
        </Text> */}
        {/* <InitImage /> */}
        {/* <Form /> */}
        {/* <Users /> */}
        <Container style={{height: "90%"}}>
          <Header hasTabs>
            <Left/>
              <Body>
                <Title>Pizzeria Quick</Title>
              </Body>
            <Right/>
          </Header>
          <Tabs>
            <Tab heading={ <TabHeading><Icon name="camera" /></TabHeading>}>
              <Tab1 />
            </Tab>
            <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
              <Tab2 />
            </Tab>
            <Tab heading={ <TabHeading><Icon name="camera" /></TabHeading>}>
              <Tab3 />
            </Tab>
          </Tabs>
        </Container>
      </View>
    </GlobalStateContext.Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    // backgroundColor: "#156D8F",
  },
  item: {
    borderWidth: 2,
    width: "100%",
    borderColor: "red",
    borderStyle: "dashed"
  },
});