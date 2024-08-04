import React from "react";
import { StyleSheet, View, Text, ColorValue } from "react-native";

type tagprops= {
    tagevent:string,
    tagcolor:ColorValue | undefined
}

export const Dayitem = ({tagevent, tagcolor}:tagprops) => {
    
    const style_sheet = StyleSheet.create({
        container:{
            width:"100%",
            paddingLeft:7,
            paddingBottom:3,
            backgroundColor:"grey",    
            borderRadius:10,
            flexDirection:"row",
            alignItems:"center",
        },
        tagball:{
            width:10,
            height:10,
            backgroundColor:tagcolor,
            borderRadius:100,
            marginRight:2,
            marginTop:3
        }
    })

    return (
        <View style={style_sheet.container}>
            <View style={style_sheet.tagball}></View>
            <Text>{tagevent}</Text>
        </View>
    )
}