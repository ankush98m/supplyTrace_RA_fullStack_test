import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ lat, lng, name, locations }) => {
  
  const defaultLat = 0; // Default latitude
  const defaultLng = 0; // Default longitude
  return (
    <MapContainer center={[lat || defaultLat, lng || defaultLng]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat || defaultLat, lng || defaultLng]}>
        <Popup>{name}</Popup>
      </Marker>
      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]}>
          <Popup>
            {location.name}<br />
            {location.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
