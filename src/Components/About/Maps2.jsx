import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import mapsAPIKey from '../../../enviornmentVariables';

function Maps2() {
    const [map, setMap] = useState(null);

    const handleMapLoad =(map) => {
        setMap(map);
    };

    const handleMapDragEnd = () => {
        console.log('Map drag end');
    };


  return (
    <LoadScript googleMapsApiKey={mapsAPIKey}>
        <GoogleMap
        onLoad={handleMapLoad}
        onDragEnd={handleMapDragEnd}
        mapContainerStyle={{
            width: '100vh',
        }}
        center={{ lat: 37.7749, lng: -122.4194 }}
        zoom={12}
        >

        </GoogleMap>
    </LoadScript>
  )
}

export default Maps2