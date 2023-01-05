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
