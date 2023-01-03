// part one import libarary
import React from 'react';
import {Text, StyleSheet,View} from 'react-native';

// create components
const ComponentScreen =()=>{
  const name = "Yousef";
    return (
    <View>
    <Text style={styles.textStyle}> Getting started with react native !</Text>
    <Text style={styles.subHeader}>My Name is {name} </Text>
    </View> 
 )

};
//create style s
const styles = StyleSheet.create({
    textStyle:{ 
        fontSize:45
    },
    subHeader:{
        fontSize:20
    }
})

// export the componets 
export default ComponentScreen ;