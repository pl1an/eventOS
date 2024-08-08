import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { maindataformat } from "..";
import { Daytime } from "../components/daytime";
import themes from "../styles/themes";

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
        for(let i=0; i<24*2+1; i++){
            data.push({hours:hour, minutes:minutes});
            minutes+=30;
            if(minutes==60) {hour++; minutes = 0;}
        }
        return data;
    }
    const timelist = generatetimelist();

    return (
        <View style={style_sheet.container}>
            <View style={style_sheet.title_conteiner}>
                <TouchableOpacity style={style_sheet.backbutton} onPress={()=>setscreenfunction(true, false)}>
                    <Text style={style_sheet.backbutton_text}>{"<"}</Text>
                </TouchableOpacity>
                <Text style={style_sheet.title}>{maindata.monthevents[dayindex[0]][dayindex[1]].parentmonth} {maindata.monthevents[dayindex[0]][dayindex[1]].daynumber}</Text>
            </View>
            <FlatList data={timelist} style={{marginBottom:20}}
            renderItem={({item})=><Daytime time={item} event={maindata.monthevents[dayindex[0]][dayindex[1]].events}></Daytime>}
            keyExtractor={item=>(JSON.stringify(item.hours)+":"+JSON.stringify(item.minutes))}></FlatList>
        </View>
    )
}

const style_sheet = StyleSheet.create({
    container:{
        backgroundColor:themes.colors.background,
    },
    title_conteiner:{
        marginBottom:15,
        alignItems:"center",
        flexDirection:"row",
        borderBottomWidth:1,
        borderColor:themes.colors.primary,
    },
    title:{
        margin:10,
        fontSize:30,
        color:themes.colors.primary,
    },
    backbutton:{
        marginLeft:15,
    },
    backbutton_text:{
        fontSize:30,
        fontWeight:"bold",
        color:themes.colors.primary,
    }
})