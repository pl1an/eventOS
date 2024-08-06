import React from "react";
import { FlatList, Text, View } from "react-native";
import { dayformat } from "./mainpage";
import { Daytime } from "../components/daytime";

type dayinfoprops = {
    daydata:dayformat
}

export const Dayinfo = ({daydata}:dayinfoprops) => {
    function generatetimelist(){
        let data = [];
        let hour = 0;
        let minutes = 0;
        for(let i=0; i<24*2; i++){
            data.push({hours:hour, minutes:minutes});
            minutes+=30;
            if(minutes==60) {hour++; minutes = 0;}
        return data;
        }
    }

    const timelist = generatetimelist();

    return (
        <View>
            <Text>`${daydata.parentmonth} ${daydata.daynumber}`</Text>
            <FlatList data={timelist} 
            renderItem={({item})=><Daytime time={item} event={daydata.events}></Daytime>}
            keyExtractor={item=>(JSON.stringify(item.hours)+JSON.stringify(item.minutes))}></FlatList>
        </View>
    )
}