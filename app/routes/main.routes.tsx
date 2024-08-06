import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Mainpage } from "../pages/mainpage";
import { Dayinfo } from "../pages/dayinfo";

const Stack = createNativeStackNavigator();

export function MainRoutes(){
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="mainpage" component={Mainpage}></Stack.Screen>
            <Stack.Screen name="dayinfo" component={Dayinfo}></Stack.Screen>
        </Stack.Navigator>
    )
}

