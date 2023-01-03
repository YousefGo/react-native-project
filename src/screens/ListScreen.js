import React from "react";
import { Text, StyleSheet  ,View ,FlatList} from "react-native";
const ListScreen = () => {
    const friends = [
        {name:'Friend #1',age:20},
        {name:'Friend #2',age:45},
        {name:'Friend #3',age:32},
        {name:'Friend #4',age:27},
        {name:'Friend #5',age:53},
        {name:'Friend #6',age:30},
        {name:'Friend #7',age:18},
        {name:'Friend #8',age:26},
        {name:'Friend #9',age:29},
        {name:'Friend #10',age:22},
    ];
  return (
  <View> 
  <FlatList 
   data={friends}
   keyExtractor={friends=>friends.name}
   renderItem={({item})=>{
      return <Text style={styles.textStyle }>{item.name} Age {item.age}</Text>
   } 
} 
   /> 
   

   </View> 
  ) ;
};

const styles = StyleSheet.create({
  textStyle:{
    marginVertical:50,
    marginHorizontal:5
  }
});

export default ListScreen;
