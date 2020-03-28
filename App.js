import React, { useEffect, useState, useReducer } from 'react';
import GlobalStateContext from "./context/appContext";
import { reducer, initialState } from "./context/reducer";
import { StyleSheet, View, ActivityIndicator} from 'react-native';
import { Root } from "native-base";
import { setUsers } from './context/actions';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Right, Left, Body, Title } from 'native-base';

import Tab1 from "./components/tabsComponent/tab1";
import Tab2 from "./components/tabsComponent/tab2";
import Tab3 from "./components/tabsComponent/tab3";
import Tab4 from "./components/tabsComponent/tab4";
import Tab5 from "./components/tabsComponent/tab5";
import Tab6 from "./components/tabsComponent/tab6";

const App = () => {

  const[state, dispatch] = useReducer(reducer, initialState);

  const[loadingFonts, setLoadingFonts] = useState(true);

  useEffect(() => {

    

    async function getUsers(){
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const response = await res.json();
      const usersList = response.map(x => {return({name: x.name, userName: x.username})});
      dispatch(setUsers(usersList.slice(0, 5)));
    }

    getUsers();
  }, [])

  

  return(
    <GlobalStateContext.Provider value={[state, dispatch]}>
      <Root>
        <View style={styles.container}>
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
                <Tab1/>
              </Tab>
              <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
                <Tab2/>
              </Tab>
              <Tab heading={ <TabHeading><Icon name="menu" /></TabHeading>}>
                <Tab3/>
              </Tab>
              <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
                <Tab4/>
              </Tab>
              <Tab heading={ <TabHeading><Icon name="camera" /></TabHeading>}>
                <Tab5/>
              </Tab>
              <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
                <Tab6/>
              </Tab>
            </Tabs>
          </Container>
        </View>
      </Root>  
    </GlobalStateContext.Provider>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "#156D8F",
  },
  item: {
    borderWidth: 2,
    width: "100%",
    borderColor: "red",
    borderStyle: "dashed"
  },
});