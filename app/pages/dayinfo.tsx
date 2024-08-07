import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { maindataformat } from "..";
import { Daytime } from "../components/daytime";

type dayinfoprops = {
    maindata:maindataformat,
    setscreenfunction:Function,
}

export const Dayinfo = ({maindata, setscreenfunction}:dayinfoprops) => {
    const dayindex = [5, 10]

    function generatetimelist(){
        let data = [];
        let hour = 0;
        let minutes = 0;
        for(let i=0; i<24*2; i++){
            data.push({hours:hour, minutes:minutes});
            minutes+=30;
            if(minutes==60) {hour++; minutes = 0;}
        }
        return data;
    }
    const timelist = generatetimelist();
    console.log(timelist);

    return (
        <View>
            <View>
                <TouchableOpacity onPress={()=>setscreenfunction(true, false)}>
                    <Text>{"<"}</Text>
                </TouchableOpacity>
                <Text>{maindata.monthevents[dayindex[0]][dayindex[1]].parentmonth} {maindata.monthevents[dayindex[0]][dayindex[1]].daynumber}</Text>
            </View>
            <FlatList data={timelist} 
            renderItem={({item})=><Daytime time={item} event={maindata.monthevents[dayindex[0]][dayindex[1]].events}></Daytime>}
            keyExtractor={item=>(JSON.stringify(item.hours)+":"+JSON.stringify(item.minutes))}></FlatList>
        </View>
    )
}