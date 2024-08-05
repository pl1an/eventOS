import {StatusBar, FlatList, Text, View } from "react-native";
import { Mainpage } from "./pages/mainpage";
import themes from "./styles/themes";

export default function Index() {
  return (
    <View style={{backgroundColor:themes.colors.background, flex:1}}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#000000"} translucent={true}></StatusBar>
      <Mainpage></Mainpage>
    </View>
  );

}
