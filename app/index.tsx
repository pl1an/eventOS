import {StatusBar, FlatList, Text, View } from "react-native";
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';
import { Day } from "./components/day";
import { Month } from "./components/month";
import { Mainpage } from "./pages/mainpage";

export default function Index() {
  return (
    <View style={{backgroundColor:"black", flex:1}}>
      <StatusBar barStyle={"light-content"} backgroundColor={"black"} translucent={true}></StatusBar>
      <Mainpage></Mainpage>
    </View>
  );

}
