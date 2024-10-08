import React from "react";
import { StyleSheet, FlatList, Text, View, TouchableOpacity, ColorValue } from "react-native";
import { Dayitem } from "./dayitem";
import { dayformat } from "..";
import themes from "../styles/themes";
import Index from "..";


type dayprops = {
    day_number:number,
    daydata:dayformat,
    setscreenfunction:Function
}
export const Day = ({day_number, daydata, setscreenfunction}:dayprops) => {
    let validday = true;
    if(day_number<0) validday = false;

    return (
        <TouchableOpacity style={style_sheet.container} onPress={() => {setscreenfunction(false, true)}}>
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
        borderColor:themes.colors.primary,
    },
    number_text:{
        fontSize:20,
        color:themes.colors.primary,
    },
    itemlist:{
        marginTop:10,
        flex:1,
    }
})