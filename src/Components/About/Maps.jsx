import { useState } from 'react';
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
} from '@vis.gl/react-google-maps';
import mapsAPIKey from '../../../enviornmentVariables';

function Maps() {
    const position = { lat: 40.75, lng: -111.84}
    const [open, setOpen] = useState(false)
  return (
    <APIProvider apiKey={mapsAPIKey}>
        <div style={ {height: "100vh" ,}}>
            <Map 
                zoom={7.2} 
                center={position} 
                mapId= 'b695d0d3d3392956'
            >
                <AdvancedMarker position={position}>

                </AdvancedMarker>   
                </Map>
        </div>
    </APIProvider>
  )
}

export default Maps