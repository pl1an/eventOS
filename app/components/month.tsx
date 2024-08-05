import React from "react";
import { StyleSheet, View, Text, ColorValue, FlatList } from "react-native";
import { Day } from "./day";

type monthprops = {
    monthname:string,
    days:number[][]
}

export const Month = ({monthname, days}:monthprops) => {
    return (
        <View style={style_sheet.container}>
            <Text style={style_sheet.monthtext}>{monthname}</Text>
            <View style={style_sheet.weekdaynames}>
                <Text style={style_sheet.weektext}>sunday</Text>
                <Text style={style_sheet.weektext}>monday</Text>
                <Text style={style_sheet.weektext}>tuesday</Text>
                <Text style={style_sheet.weektext}>wednesday</Text>
                <Text style={style_sheet.weektext}>thursday</Text>
                <Text style={style_sheet.weektext}>friday</Text>
                <Text style={style_sheet.weektext}>saturday</Text>
            </View>
            <FlatList data={days} 
            renderItem={({item})=><FlatList style={style_sheet.monthrow} data={item} 
                renderItem={({item}) => <Day day_number={item} day_data={[]}></Day>}
                keyExtractor={item=>JSON.stringify(item)}></FlatList>} 
            keyExtractor={(item1)=> JSON.stringify(item1[0])}></FlatList>
        </View>
    )
}

const style_sheet = StyleSheet.create({
    container:{
        width:1400,
        height:817,
        margin:50,
        borderWidth:1,
    },
    monthtext:{
        fontSize:30,
        padding:10,
        borderWidth:1,
    },
    monthrow:{
        flexDirection:"row"
    },
    weekdaynames:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    weektext:{
        flex:1,
        borderWidth:1,
        padding:5,
        paddingLeft:10,
    }
})