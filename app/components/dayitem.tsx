import React from "react";
import { StyleSheet, View, Text, ColorValue } from "react-native";

type dayitemprops = {
    dayevent:string,
    tagcolor:ColorValue | undefined
}

export const Dayitem = ({dayevent, tagcolor}:dayitemprops) => {
    
    const style_sheet = StyleSheet.create({
        container:{
            width:"100%",
            paddingLeft:7,
            paddingBottom:3,
            backgroundColor:tagcolor,    
            borderRadius:10,
            flexDirection:"row",
            alignItems:"center",
            marginTop:5,
        },
    })

    return (
        <View style={style_sheet.container}>
            <Text>{dayevent}</Text>
        </View>
    )
}