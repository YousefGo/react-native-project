<<<<<<< HEAD
import React from 'react';
import {View ,Text,StyleSheet} from 'react-native'; 

const ImageDetail = (props)=>{
    
  return
   <Text>{props.title}</Text>
};

const styles = StyleSheet.create({

});

export default ImageDetail;
=======
import React from "react";
import { Text, StyleSheet ,View ,Button, TouchableOpacity, Image, ShadowPropTypesIOS} from "react-native";
const ImageDetail = ({imageSource,title,imageScore}) => {
  // console.log(props.navigation.navigate)
 
  return(
    <View>
      <Image  source={imageSource}  />  
     <Text> {title} </Text> 
     <Text> Image Score - {imageScore}</Text>
    </View>
  ) 
};



export default ImageDetail;
>>>>>>> 8583a4da936800c7200dc000c5a6f98db8ebc66b
