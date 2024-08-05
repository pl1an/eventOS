import React from "react";
import { StyleSheet, FlatList, Text, View, TouchableOpacity, ColorValue } from "react-native";
import { Dayitem } from "./dayitem";
import { dayformat } from "../pages/mainpage";

type dayprops = {
    day_number:number,
    daydata:dayformat
}
export const Day = ({day_number, daydata}:dayprops) => {
    let validday = true;
    if(day_number<0) validday = false;

    return (
        <TouchableOpacity style={style_sheet.container}>
            {validday && (<Text style={style_sheet.number_text}>{day_number}</Text>)}
            {validday && (<FlatList data={daydata.placeholderevents} 
            renderItem ={({item}) => <Dayitem dayevent={item.eventname} tagcolor={item.tag.color} ></Dayitem>}
            keyExtractor={item => item.eventname}
            style={style_sheet.itemlist}>
            </FlatList>)}
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
        borderColor:"white"
    },
    number_text:{
        fontSize:20,
        color:"white"
    },
    itemlist:{
        marginTop:10,
        flex:1,
    }
})