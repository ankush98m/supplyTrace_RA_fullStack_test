import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';

// component to update center in the map
const MapViewUpdater = ({ center }) => {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.setView(center, 13);
    }
  }, [center, map]);

  return null;
};

export default MapViewUpdater;
