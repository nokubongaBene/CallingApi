import React from "react";
import {StyleSheet, Text, View, FlatList, useLayoutEffect, TouchableOpacity} from "react-native";
import Colors from "../constants/Colors";
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from "axios";

const ListButton = ({title, navigation}) => {
    return(
        <TouchableOpacity onPress={() => 
            {navigation.navigate("display", {title})}}
             style={styles.itemContainer}
             >
        <View>
            <Text style={styles.itemTitle}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default ({navigation}) => {
    return(
        <View style={styles.container}>
            <ListButton title="HeadLines"  navigation={navigation}/>
            <ListButton title="Technology" navigation={navigation}/>
            <ListButton title="Business" navigation={navigation}/>
            <ListButton title="Sports" navigation={navigation}/>
            <ListButton title="Weather" navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center'
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