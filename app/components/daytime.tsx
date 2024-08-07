import React from "react";
import { Text, View, TouchableOpacity, FlatList, StyleSheet} from "react-native";
import { eventformat } from "..";
import themes from "../styles/themes";

type daytimeprops = {
    event:eventformat[],
    time:eventformat["time"],
}

export const Daytime = ({event, time}:daytimeprops) => {
    let showevent = []
    for(let i=0; i<event.length; i++){
        if(event[i].time.hours == time.hours && event[i].time.minutes == time.minutes) {showevent.push(event[i])}
    }

    function render_hours(hours:number){
        if(hours<10) return "0" + JSON.stringify(hours);
        else return JSON.stringify(hours);
    }
    function render_minutes(minutes:number){
        if(minutes===0) return JSON.stringify(minutes) + "0";
        else return JSON.stringify(minutes);
    }
    
    const style_sheet = StyleSheet.create({
        container:{
            padding:10,
            marginBottom:10,
            flexDirection:"row",
            alignItems:"center",
            borderWidth:1,
            borderRadius:7,
            borderColor:themes.colors.primary,
        },
        text:{
            color:themes.colors.primary,
            textAlign:"center",
        }
    })

    return (
        <View style={style_sheet.container}>
            <Text style={style_sheet.text}>{render_hours(time.hours)}:{render_minutes(time.minutes)}</Text>
            <FlatList style={{flex:1, paddingTop:10, marginLeft:10}}data={showevent} 
                renderItem={({item})=><TouchableOpacity 
                    style={{padding:3, marginLeft:10, marginBottom:10, justifyContent:"center", alignItems:"center", backgroundColor:item.tag.color, borderRadius:15,}}>
                        <Text style={style_sheet.text}>{item.eventname}</Text>
                    </TouchableOpacity>}
                keyExtractor={item=>item.eventname}>
            </FlatList>
        </View>
    )
}