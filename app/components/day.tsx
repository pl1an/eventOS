import React from "react";
import { StyleSheet, FlatList, Text, View, TouchableOpacity, ColorValue } from "react-native";
import { Dayitem } from "./dayitem";

type dayprops = {
    day_number:number,
    day_data:{eventname:string, tagcolor:ColorValue | string}[]
}
export const Day = ({day_number, day_data}:dayprops) => {
    return (
        <TouchableOpacity style={style_sheet.container}>
            <Text style={style_sheet.number_text}>{day_number}</Text>
            <FlatList data={day_data} 
            renderItem ={({item}) => <Dayitem dayevent={item.eventname} tagcolor={item.tagcolor} ></Dayitem>}
            keyExtractor={item => item.eventname}
            style={style_sheet.itemlist}>
            </FlatList>
        </TouchableOpacity>
    )
}

const style_sheet = StyleSheet.create({
    container:{
        paddingLeft:10,
        paddingRight:10,
        paddingTop: 5,
        width:200,
        height:150,
        borderRightWidth:1,
        borderBottomWidth:1,
        borderColor:"black"
    },
    number_text:{
        fontSize:20,
    },
    itemlist:{
        marginTop:10,
        flex:1,
    }
})