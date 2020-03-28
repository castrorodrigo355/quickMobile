import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Accordion, Header, Content } from "native-base";
import GlobalStateContext from "../../context/appContext";

const MyAccordion = () => {

    const[state, dispatch] = useContext(GlobalStateContext);

    const dataArray = [
        { title: "First Element", content: "Lorem ipsum dolor sit amet" },
        { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
        { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
    ];

    return (
        <Container>
            <Header />
            <Content padder>
                <Accordion  dataArray={dataArray} 
                            expanded={1}
                            // Data Header/Content Style
                            headerStyle={{ backgroundColor: "#D97816" }}
                            contentStyle={{ backgroundColor: "#ddecf8" }}
                            // Arrow Icons by default
                            iconStyle={{ color: "green" }}
                            icon="add" 
                            expandedIconStyle={{ color: "red" }}
                            expandedIcon="remove"
                            />
            </Content>
        </Container>
    )
}

export default MyAccordion;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute",
        marginTop: 60,
        width: "100%",
        // height: "90%",
        borderColor: "white",
        borderStyle: "dashed",
        borderWidth: 1,
    }    
});