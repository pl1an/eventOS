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
            <FlatList data={days} 
            renderItem={({item})=><FlatList style={style_sheet.monthrow} data={item} 
                renderItem={({item}) => <Day day_number={item} day_data={[]}></Day>}
                keyExtractor={item=>JSON.stringify(item)}></FlatList>}> 
            keyExtractor={item => JSON.stringify(item[0])}</FlatList>
        </View>
    )
}

const style_sheet = StyleSheet.create({
    container:{
        width:1400,
        borderWidth:1,
    },
    monthtext:{
        fontSize:30,
        padding:10,
        borderWidth:1,
    },
    monthrow:{
        flexDirection:"row"
    }
})