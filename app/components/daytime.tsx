import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { eventformat } from "../pages/mainpage";
import { FlatList } from "react-native-gesture-handler";

type daytimeprops = {
    event:eventformat[],
    time:eventformat["time"],
}
export const Daytime = ({event, time}:daytimeprops) => {
    let showevent = []
    for(let i=0; i<event.length; i++){
        if(event[i].time.hours == time.hours && event[i].time.minutes == time.minutes) {showevent.push(event[i])}
    }

    return (
        <TouchableOpacity>
            <Text>{`${time.hours}:${time.minutes}`}</Text>
            <FlatList data={showevent} 
                renderItem={({item})=><Text>{item.eventname}</Text>}
                keyExtractor={item=>item.eventname}>
            </FlatList>
        </TouchableOpacity>
    )
}