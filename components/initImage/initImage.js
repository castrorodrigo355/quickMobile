import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

const InitImage = () => {

    // const[state, dispatch] = useContext(GlobalStateContext);    

    return(
        <View>
            <Image  style={{width: 420, height: 1000}}
                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0unbeT8MBNW_Z4hC0PuuXGQBQb1QZYEeEbb7ceYkfM5P5XWJ9'}}
                    />
        </View>
        )
    }

export default InitImage;
