import React, { useEffect, useState, useReducer } from 'react';
import GlobalStateContext from "./context/appContext";
import { reducer, initialState } from "./context/reducer";
import { StyleSheet, View, Text } from 'react-native';
import { Root } from "native-base";
import { setUsers } from './context/actions';
import Header from './views/header';
import StartGameScreen from './views/screens/startGameScreen';
// import { Container, Header, Tab, Tabs, TabHeading, Icon, Right, Left, Body, Title } from 'native-base';

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
    <GlobalStateContext.Provider 
        value={[state, dispatch]}>
      <Root>
        <View style={styles.container}>
          <Header title={"Welcome"}/>
          <StartGameScreen/>
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
  }
});