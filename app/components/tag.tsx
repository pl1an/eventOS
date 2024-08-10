import React from "react";
import { StyleSheet, View, Text, ColorValue } from "react-native";
import themes from "../styles/themes";

type tagprops= {
    tagname:string,
    tagcolor:ColorValue | undefined
}

export const Tag = ({tagname, tagcolor}:tagprops) => {
    
    const style_sheet = StyleSheet.create({
        container:{
            paddingLeft:7,
            paddingBottom:3,
            backgroundColor:themes.colors.tagbackground,    
            borderRadius:10,
            flexDirection:"row",
            alignItems:"center",
            flexGrow:1,
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
            <Text>{tagname}</Text>
        </View>
    )
}