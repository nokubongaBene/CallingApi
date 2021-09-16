import React, {useState} from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/home";
import Colors from "./constants/Colors";
import display from "./screens/display";
import axios from "axios";



const Stack = createNativeStackNavigator();


export default function App() {

  return(
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="News" component={Home} />
        <Stack.Screen name="display" component={display}
        options={({route}) =>{
          return(
            {title: route.params.title}
          )
        }}
           /> 
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  itemTitle: {
    fontSize: 24,
    padding: 5, 
    color: Colors.whitesmoke,
  },
 itemContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    flex: 1,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    backgroundColor:'#8a2be2',
    
  },
  icon:{
   padding: 5,
   fontSize: 24,
    
  },
  centeredView:{
      justifyContent: "center",
      alignItems: "center",
      marginTop: 50,
  }
});

