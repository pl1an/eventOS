import React from "react";
import { maindataformat } from "..";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Tag } from "../components/tag";
import themes from "../styles/themes";
import FeahterIcon from "react-native-vector-icons/Feather"

type dayinfoprops = {
    maindata:maindataformat,
    setScreenfunction:Function,
}
export const Eventinfo = ({maindata, setScreenfunction}:dayinfoprops) => {
    const style_sheet = StyleSheet.create({
        container:{
            backgroundColor:themes.colors.background,
        },
        titlecontainer:{
            flexDirection:"row",
            alignItems:"center",
        },
        infocontainer:{
            padding:10,
        },
        timecontainer:{
            marginBottom:10,
            flexDirection:"row",
        },
        title:{
            margin:10,
            marginBottom:0,
            color:themes.colors.primary,
            fontSize:30,
        },
        timetext:{
            marginLeft:5,
            color:themes.colors.primary,
            fontWeight:"bold",
        },
        text:{
            color:themes.colors.primary,
        },
        backbutton:{
            marginTop:8,
            marginLeft:10,
            color:themes.colors.primary,
            fontWeight:"bold",
            fontSize:30,
        },
        editbutton:{
            marginLeft:186,
            marginTop:13,
        },
        infolist:{
            height:710,
            padding:5,
            borderRadius:10,
            borderColor:themes.colors.primary,
        }
    })

    return (
        <View style={style_sheet.container}>
            <View style={style_sheet.titlecontainer}>
                <TouchableOpacity onPress={()=>setScreenfunction(false, true, false)}>
                    <Text style={style_sheet.backbutton}>{"<"}</Text>
                </TouchableOpacity>
                <Text style={style_sheet.title}>{maindata.monthevents[3][7].events[0].eventname}</Text>
                <TouchableOpacity style={style_sheet.editbutton}>
                    <FeahterIcon name="edit-2" color={themes.colors.primary} style={{fontSize:20}}></FeahterIcon>
                </TouchableOpacity>
            </View>
            <View style={style_sheet.infocontainer}>
                <Tag tagname={maindata.monthevents[3][7].events[0].tag.name} tagcolor={maindata.monthevents[3][7].events[0].tag.color}></Tag>
                <View style={style_sheet.timecontainer}>
                    <Text style={style_sheet.timetext}>{maindata.monthevents[3][7].events[0].date.day}/{maindata.monthevents[3][7].events[0].date.month}/{maindata.monthevents[3][7].events[0].date.year}</Text>
                    <Text style={style_sheet.timetext}>{maindata.monthevents[3][7].events[0].time.hours}:{maindata.monthevents[3][7].events[0].time.minutes}</Text>
                </View>
                <FlatList style={style_sheet.infolist} data={maindata.monthevents[3][7].events[0].detailedinfo} 
                    renderItem={({item})=><Text style={style_sheet.text}>{item}</Text>}
                    keyExtractor={item=>item}>
                </FlatList>
            </View>
        </View>
    ) 
}