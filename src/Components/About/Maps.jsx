import { useCallback, useState } from 'react';
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
    useMap,
} from '@vis.gl/react-google-maps';
import mapsAPIKey from '../../../enviornmentVariables';

function Maps() {
    const [path, setPath] = useState([]);
    const slcMarker = { lat: 40.75, lng: -111.84};
    const provoMarker = { lat: 40.26, lng: -111.69};
    const pcMarker = { lat: 40.64, lng: -111.44};
    const moabMarker = {lat: 38.58, lng: -109.49 }
    const [slc, setSlc] = useState(false);
    const [provo, setProvo] = useState(false);
    const [parkCity, setParkCity] = useState(false);
    const [moab, setMoab] = useState(false)

    const MapComponent = useMap();

    const handleMapClick = (e) => {
        let coords = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        }
        setPath([...path, coords])
    }

    const handleMapDragStart = () => {
        console.log('Map drag start');
        const newPosition = MapComponent.getCenter()
        MapComponent.panTo(newPosition)
    };

    const handleMapDragEnd = () => {
        console.log('Map drag end');
    };

  return (
    <APIProvider apiKey={mapsAPIKey}>
        <div style={ {height: "100vh" ,}}>
            <Map 
                zoom={7.2} 
                center={slcMarker} 
                mapId= 'b695d0d3d3392956'
                onClick={handleMapClick}
                onDragStart={handleMapDragStart}
                onDragEnd={handleMapDragEnd} 
            >
                <AdvancedMarker position={slcMarker} onClick={() => setSlc(true)}>
                    <Pin/>
                </AdvancedMarker>
                
                {slc && (
                    <InfoWindow position={slcMarker} onCloseClick={() => setSlc(false)}>
                    <h4>Salt Lake County</h4>
                    <p>Popular Services in the Area:</p>
                    <ul>
                        <li>Aeration</li>
                        <li>Grill Cleaning</li>
                    </ul>
                    </InfoWindow>
                )}   

                <AdvancedMarker position={provoMarker} onClick={() => setProvo(true)}>
                    <Pin/>
                </AdvancedMarker>
                {provo && (
                    <InfoWindow position={provoMarker} onCloseClick={() => setProvo(false)}>
                        <h4>Utah County</h4>
                        <p>Popular Services in the Area:</p>
                        <ul>
                            <li>Aeration</li>
                            <li>Power Washing</li>
                        </ul>
                    </InfoWindow>
                )}
                
                <AdvancedMarker position={pcMarker} onClick={() => setParkCity(true)}>
                    <Pin/>
                </AdvancedMarker>
                {parkCity && (
                    <InfoWindow position={pcMarker} onCloseClick={() => setParkCity(false)}>
                        <h4>Park City</h4>
                        <p>Popular Services in the Area:</p>
                        <ul>
                            <li>Grill Cleaning</li>
                            <li>Power Washing</li>
                        </ul>
                    </InfoWindow>
                )}
                <AdvancedMarker position={moabMarker} onClick={() => setMoab(true)}>
                    <Pin/>
                </AdvancedMarker>
                {moab && (
                    <InfoWindow position={moabMarker} onCloseClick={() => setMoab(false)}>
                        <h4>Moab</h4>
                        <p>Popular Services in the Area:</p>
                        <ul>
                            <li>Grill Cleaning</li>
                            <li>Power Washing</li>
                        </ul>
                    </InfoWindow>
                )}
            </Map>
        </div>
    </APIProvider>
  )
}

export default Maps