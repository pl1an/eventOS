import { Text, View } from "react-native";
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';
import { Day } from "./components/day";

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
    }]

  return ( 
    <ReactNativeZoomableView>
      <Day day_number={2} day_data={tempdaydata}></Day>
    </ReactNativeZoomableView>
  );
}
