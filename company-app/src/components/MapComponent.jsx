import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapViewUpdater from './MapViewUpdater';

// Component to display map 
const MapComponent = ({ locations, center }) => {

  return (
    <MapContainer center={center} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locations.map((location, index) => (
        <Marker key={index} position={[location.latitude, location.longitude]}>
          <Popup>
            {/* {location.name}<br /> */}
            {location.address}
          </Popup>
        </Marker>
      ))}
      <MapViewUpdater center={center} />
    </MapContainer>
  );
};

export default MapComponent;
