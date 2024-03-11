import { useState } from "react";
import { GoogleMap, LoadScript, Polygon } from "@react-google-maps/api";
import mapsAPIKey from '../../../enviornmentVariables';

function Maps2() {
    const [map, setMap] = useState(null);
    const [path, setPath] = useState([]);
    // const [mapWidth, mapHeight] = useScreen();
    const [polyObj, setPolyObj] = useState();
    const [startCoords, setStartCoords] = useState({
        lat: 0,
        lng: 0
    })

    const dragStart = (e) => {
        setStartCoords({
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        })
    }
    
    const dragEnd = (e) => {
        let coords = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        }
    
        const newPath = path.map(node => ({
            lat: node.lat - (startCoords.lat - coords.lat),
            lng: node.lng - (startCoords.lng - coords.lng)
        }));
        setPath(newPath)
    }

    const handleMapClick = (e) => {
        let coords = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        }
        // Add the coordinates of the click to the path
        setPath([...path, coords])
    }


  return (
    <LoadScript googleMapsApiKey={mapsAPIKey} loading="async">
        <GoogleMap
        mapContainerStyle={{
            width: "100vh"
        }}
        center={{ lat: 37.7749, lng: -122.4194 }}
        zoom={12}
        onClick={handleMapClick}
        >

        <Polygon
            editable
            draggable
            path={path}
            onDragStart={(e) => {
                setStartCoords({
                    lat: e.latLng.lat(),
                    lng: e.latLng.lng()
                })
            }}
            onDragEnd={dragEnd}
            onLoad={(obj) => setPolyObj(obj)}
        />

        </GoogleMap>
    </LoadScript>
  )
}

export default Maps2