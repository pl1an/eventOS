import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StatusBar, FlatList, Text, View } from "react-native";
import themes from "./styles/themes";
import { MainRoutes } from './routes/main.routes';


export default function Index() {
  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor={themes.colors.background} translucent={true}></StatusBar>
      <NavigationContainer independent={true}>
        <MainRoutes></MainRoutes>
      </NavigationContainer>
    </>
  );

}
