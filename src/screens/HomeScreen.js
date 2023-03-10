import React from "react";
import { Text, StyleSheet ,View ,Button, TouchableOpacity} from "react-native";
const HomeScreen = ({navigation}) => {
  // console.log(props.navigation.navigate)
  function movePage(pagename){
    navigation.navigate(pagename)
  }
  return(
    <View>
        <Text style={styles.text}> Hi , There </Text>
        <Button
        onPress={()=>movePage('Components')}
        title="Go to Components Demo" />
            <Button
        onPress={()=>movePage('List')}
        title="Go to List Demo" />
             <Button
        onPress={()=>movePage('Image')}
        title="Go to Image  Demo" />

      <Button
        onPress={()=>movePage('Image')}
        title="Go to List Image Screen" />

      <Button
        onPress={()=>movePage('Counter')}
        title="Go to  Counter Screen" />
        

        
      <Button
        onPress={()=>movePage('Color')}
        title="Go to Color Screen" />
       
    </View>
  ) 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign:"center",
    marginTop:10
  },
});

export default HomeScreen;
