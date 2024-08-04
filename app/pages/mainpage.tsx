import React from "react";
import { Month } from "../components/month";

export const Mainpage = () => {
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
                    if(weekcounter[0]>7) {weekcounter[0] = 0; weekcounter[1]++; daysInYear[month].push([]);};
                    daysInYear[month][weekcounter[1]].push(-(i+1));
                }
            }
            for (let day = 1; day <= daysInMonth; day++) {
                weekcounter[0]++;
                if(weekcounter[0]>7) {weekcounter[0] = 0; weekcounter[1]++; daysInYear[month].push([]);};
                daysInYear[month][weekcounter[1]].push(day);
            }
        }

        return daysInYear;
    }
    return (
        <Month monthname="april" days={getDates_currentyear()[0]}></Month>
    );
}