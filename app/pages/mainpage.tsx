import React from "react";
import { Month } from "../components/month";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import { View, FlatList, StyleSheet, ColorValue } from "react-native";
import themes from "../styles/themes";

export type eventformat = {
    eventname:string,
    detailedinfo:string[],
    tag:{
        color: ColorValue | string,
        name: string
    },
    time:{
        hours:number,
        minutes:number
    },
    date:{
        year:number,
        month:number,
        day:number
    },
    repeattime:number
}
export type dayformat = {
    events:eventformat[],
    placeholderevents:[eventformat, eventformat, eventformat] | eventformat[],
    parentmonth:string,
    daynumber:number,
}
export type maindataformat = {
    dates_currentyear:number[][][],
    monthnames:string[],
    monthevents:dayformat[][]
}

type mainpageprops = {
    navigation:undefined
}

export const Mainpage = ({navigation}:mainpageprops) => {
    function getDates_currentyear() {
        const currentYear = new Date().getFullYear();
        const daysInYear:number[][][] = [];

        for (let month = 0; month < 12; month++) {
            const daysInMonth = new Date(currentYear, month + 1, 0).getDate();
            daysInYear.push([[]]);
            let weekcounter = [0, 0];
            if(new Date(currentYear, month, 1).getDay()!=0){
                for(let i=0; i<new Date(currentYear, month, 1).getDay(); i++){
                    weekcounter[0]++;
                    if(weekcounter[0]>6) {weekcounter[0] = 0; weekcounter[1]++; daysInYear[month].push([]);};
                    daysInYear[month][weekcounter[1]].push(-(i+1));
                }
            }
            weekcounter[0]--;
            for (let day = 1; day <= daysInMonth; day++) {
                weekcounter[0]++;
                if(weekcounter[0]>6) {weekcounter[0] = 0; weekcounter[1]++; daysInYear[month].push([]);};
                daysInYear[month][weekcounter[1]].push(day);
            }
        }
        //console.log(daysInYear);
        return daysInYear;
    }

    function fill_default(daynumber:number[][][], monthnames:string[]){
        let data:dayformat[][] = [];
        for(let i=0; i<12; i++){
            data.push([]);
            let monthsize = 0;
            for(let ii=0; ii<daynumber[i].length; ii++){
                monthsize+=daynumber[i][ii].length;
            }
            let weekcounter=1;
            for(let ii=0; ii<monthsize; ii++){
                if(ii+1>7*(weekcounter)) {weekcounter++;}
                //console.log(monthsize, ii, i, weekcounter-1, ii-7*(weekcounter-1), daynumber[i][weekcounter-1][ii-7*(weekcounter-1)])
                data[i].push({
                    events:[],
                    placeholderevents:[],
                    parentmonth:monthnames[i],
                    daynumber:daynumber[i][weekcounter-1][ii-7*(weekcounter-1)],
                })
            }
        }
        return data;
    }


    const maindata:maindataformat = {
        dates_currentyear:getDates_currentyear(),
        monthnames:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthevents:fill_default(getDates_currentyear(), ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])
    }

    return (
      <View style={{backgroundColor:themes.colors.background, flex:1}}>
            <ReactNativeZoomableView minZoom={0.1} initialZoom={0.1} bindToBorders={false}>
                <View style={style_sheet.yearrows}>
                    <Month navi={navigation} monthname={maindata.monthnames[0]} days={maindata.dates_currentyear[0]} monthdata={maindata.monthevents[0]}></Month>
                    <Month navi={navigation} monthname={maindata.monthnames[1]} days={maindata.dates_currentyear[1]} monthdata={maindata.monthevents[1]}></Month>
                    <Month navi={navigation} monthname={maindata.monthnames[2]} days={maindata.dates_currentyear[2]} monthdata={maindata.monthevents[2]}></Month>
                </View>
                <View style={style_sheet.yearrows}>
                    <Month navi={navigation} monthname={maindata.monthnames[3]} days={maindata.dates_currentyear[3]} monthdata={maindata.monthevents[3]}></Month>
                    <Month navi={navigation} monthname={maindata.monthnames[4]} days={maindata.dates_currentyear[4]} monthdata={maindata.monthevents[4]}></Month>
                    <Month navi={navigation} monthname={maindata.monthnames[5]} days={maindata.dates_currentyear[5]} monthdata={maindata.monthevents[5]}></Month>
                </View>
                <View style={style_sheet.yearrows}>
                    <Month navi={navigation} monthname={maindata.monthnames[6]} days={maindata.dates_currentyear[6]} monthdata={maindata.monthevents[6]}></Month>
                    <Month navi={navigation} monthname={maindata.monthnames[7]} days={maindata.dates_currentyear[7]} monthdata={maindata.monthevents[7]}></Month>
                    <Month navi={navigation} monthname={maindata.monthnames[8]} days={maindata.dates_currentyear[8]} monthdata={maindata.monthevents[8]}></Month>
                </View>
                <View style={style_sheet.yearrows}>
                    <Month navi={navigation} monthname={maindata.monthnames[9]} days={maindata.dates_currentyear[9]} monthdata={maindata.monthevents[9]}></Month>
                    <Month navi={navigation} monthname={maindata.monthnames[10]} days={maindata.dates_currentyear[10]} monthdata={maindata.monthevents[10]}></Month>
                    <Month navi={navigation} monthname={maindata.monthnames[11]} days={maindata.dates_currentyear[11]} monthdata={maindata.monthevents[11]}></Month>
                </View>
            </ReactNativeZoomableView>
        </View>
    );
}

const style_sheet = StyleSheet.create({
    yearrows:{
        flexDirection:"row",
        margin:100,
    }
})