import React, {useState, useEffect} from "react";
import {StyleSheet, Text, View, FlatList, useLayoutEffect, TouchableOpacity, Alert, ScrollView} from "react-native";
import Colors from "../constants/Colors";
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from "axios";

 

export default ({route, navigation}) => {
    const {title} = route.params;
const [articlesResponse, setResponse] = useState([]); 
useEffect (()=>{
    apiCall();
},[])
const  apiCall=  () =>{
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${title}&apiKey=ebe081d8ef894a93a470d339cbb4e011`).then ((response) =>{
        console.log(response.data.articles)
        
        setResponse ( response.data.articles);

        if (response.data.articles.length == 0){
            Alert.alert(
                "Error",
                "Opps, No articles in this category.",
                [
                    {
                    text: "ok", onPress: () => navigation.goBack()
                    },
                ],
            )
                
        }
    }).catch((error)=>{
        console.log(error)
        Alert.alert(
            "Error",
            "Opps, No articles in this category.",)
    })
    
}
    return(
        <View style={styles.container}>
            <ScrollView>
             {articlesResponse.map((item, index) =>{
                 return(
                     <View key={index}>
                    <Text>{item.description} </Text>
                    </View>

                 )
             })}
          </ScrollView>  
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: Colors.blanchedalmond,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
},
itemTitle: {
    fontSize: 24, 
    padding: 5,
    color: Colors.black
},
itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    width:370,
    flex: 1,
    borderRadius: 20,
    marginHorizontal:20,
    marginVertical: 10,
    padding: 15,
    backgroundColor: Colors.blanchedalmond
    
},
icon: {

}
})