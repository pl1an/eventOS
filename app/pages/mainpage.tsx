import React from "react";
import { Month } from "../components/month";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import { View, FlatList, StyleSheet, ColorValue } from "react-native";
import themes from "../styles/themes";
import { maindataformat } from "..";


export const Mainpage = ({maindata, setscreenfunction}:{maindata:maindataformat, setscreenfunction:Function}) => {
    return (
      <View style={{backgroundColor:themes.colors.background, flex:1}}>
            <ReactNativeZoomableView minZoom={0} initialZoom={0.1} bindToBorders={false}>
                <View style={style_sheet.yearrows}>
                    <Month monthname={maindata.monthnames[0]} days={maindata.dates_currentyear[0]} monthdata={maindata.monthevents[0]} setscreenfunction={setscreenfunction}></Month>
                    <Month monthname={maindata.monthnames[1]} days={maindata.dates_currentyear[1]} monthdata={maindata.monthevents[1]} setscreenfunction={setscreenfunction}></Month>
                    <Month monthname={maindata.monthnames[2]} days={maindata.dates_currentyear[2]} monthdata={maindata.monthevents[2]} setscreenfunction={setscreenfunction}></Month>
                </View>
                <View style={style_sheet.yearrows}>
                    <Month monthname={maindata.monthnames[3]} days={maindata.dates_currentyear[3]} monthdata={maindata.monthevents[3]} setscreenfunction={setscreenfunction}></Month>
                    <Month monthname={maindata.monthnames[4]} days={maindata.dates_currentyear[4]} monthdata={maindata.monthevents[4]} setscreenfunction={setscreenfunction}></Month>
                    <Month monthname={maindata.monthnames[5]} days={maindata.dates_currentyear[5]} monthdata={maindata.monthevents[5]} setscreenfunction={setscreenfunction}></Month>
                </View>
                <View style={style_sheet.yearrows}>
                    <Month monthname={maindata.monthnames[6]} days={maindata.dates_currentyear[6]} monthdata={maindata.monthevents[6]} setscreenfunction={setscreenfunction}></Month>
                    <Month monthname={maindata.monthnames[7]} days={maindata.dates_currentyear[7]} monthdata={maindata.monthevents[7]} setscreenfunction={setscreenfunction}></Month>
                    <Month monthname={maindata.monthnames[8]} days={maindata.dates_currentyear[8]} monthdata={maindata.monthevents[8]} setscreenfunction={setscreenfunction}></Month>
                </View>
                <View style={style_sheet.yearrows}>
                    <Month monthname={maindata.monthnames[9]} days={maindata.dates_currentyear[9]} monthdata={maindata.monthevents[9]} setscreenfunction={setscreenfunction}></Month>
                    <Month monthname={maindata.monthnames[10]} days={maindata.dates_currentyear[10]} monthdata={maindata.monthevents[10]} setscreenfunction={setscreenfunction}></Month>
                    <Month monthname={maindata.monthnames[11]} days={maindata.dates_currentyear[11]} monthdata={maindata.monthevents[11]} setscreenfunction={setscreenfunction}></Month>
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