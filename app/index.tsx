import { FlatList, Text, View } from "react-native";
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';
import { Day } from "./components/day";
import { Month } from "./components/month";
import { Mainpage } from "./pages/mainpage";

export default function Index() {
  const tempdaydata = [
    {
      eventname:"code",
      tagcolor:"red"
    },
    {
      eventname:"learn",
      tagcolor:"blue"
    },
    {
      eventname:"agenda",
      tagcolor:"green"
    }
  ]

  const tempmonthdata = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

  return ( 
    <ReactNativeZoomableView minZoom={0.1}>
      <Mainpage></Mainpage>
    </ReactNativeZoomableView>
  );
}
