import { useState } from 'react';
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
} from '@vis.gl/react-google-maps';

function Maps() {
    const position = { lat: 53.54, lng: 10}
    const [open, setOpen] = useState(false)
  return (
    <APIProvider apiKey=''>
        <div style={ {height: "100vh" ,}}>
            <Map 
                zoom={9} 
                center={position} 
                mapId= "" 
            >
                <AdvancedMarker position={position}>

                </AdvancedMarker>   
                </Map>
        </div>
    </APIProvider>
  )
}

export default Maps