import React, { useState } from 'react'; 
import {Text,View , Button } from 'react-native';

const ConuterScreen = ()=>{
     const [counter,setCounter] = useState(0);
return (
    <View>
        <Button  title='Increase'  onPress={()=>{
           setCounter(counter + 1 );
        }}/>

        <Button  title='Decrease'  onPress={()=>{
            setCounter(counter - 1 );
        }}/>
        <Text> Current {counter}</Text>
        
    </View>
)
}

export default ConuterScreen ;