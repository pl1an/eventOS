import {StatusBar, ColorValue} from "react-native";
import themes from "./styles/themes";
import { useState } from "react";
import { Mainpage } from "./pages/mainpage";
import { Dayinfo } from "./pages/dayinfo";

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


export default function Index() {
  const [showMain, setShowMain] = useState(true);
  const [showDayinfo, setShowDayinfo] = useState(false);

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
                    events:[{
                        eventname:"hello world",
                        detailedinfo:[],
                        tag:{
                            color:"green",
                            name:"code"
                        },
                        time:{
                            hours:6,
                            minutes:30
                        },
                        date:{
                            year:2024,
                            month:5,
                            day:21
                        },
                        repeattime:0
                    },{
                        eventname:"test",
                        detailedinfo:[],
                        tag:{
                            color:"blue",
                            name:"code"
                        },
                        time:{
                            hours:6,
                            minutes:30
                        },
                        date:{
                            year:2024,
                            month:5,
                            day:21
                        },
                        repeattime:0
                    }],
                    placeholderevents:[],
                    parentmonth:monthnames[i],
                    daynumber:daynumber[i][weekcounter-1][ii-7*(weekcounter-1)],
                });
            }
        }
        return data;
    }

    const maindata = {
        dates_currentyear:getDates_currentyear(),
        monthnames:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthevents:fill_default(getDates_currentyear(), ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])
    }

  function setScreen(main:boolean, dayinfo:boolean){
    setShowMain(main);
    setShowDayinfo(dayinfo)
  }

  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor={themes.colors.background} translucent={true}></StatusBar>
      <>
        {showMain && (<Mainpage maindata={maindata} setscreenfunction={setScreen}></Mainpage>)}
        {showDayinfo && (<Dayinfo maindata={maindata} setscreenfunction={setScreen}></Dayinfo>)}
      </>
    </>
  );

}
