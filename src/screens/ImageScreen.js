import React from "react";
import { Text, StyleSheet ,View ,Button, TouchableOpacity} from "react-native";
import ImageDetail from "./components/ImageDetail";
const ImageScreen = ({navigation}) => {
  // console.log(props.navigation.navigate)
  function movePage(pagename){
    navigation.navigate(pagename)
  }
  return(
    <View>
     <ImageDetail title="Forcest" imageSource={require('../../assets/forest.jpg')} imageScore={10} />
     <ImageDetail title="Beach"  imageSource={require('../../assets/beach.jpg')} imageScore={5}/>
     <ImageDetail title="Mountine"  imageSource={require('../../assets/mountain.jpg')} imageScore={7}/>
    </View>
  ) 
};



export default ImageScreen;
