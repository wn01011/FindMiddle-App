import React from 'react';
import MapView from 'react-native-nmap';

const MapComponent: React.FC = () => {
  return (
    <MapView style={{flex: 1, backgroundColor: 'grey'}} zoomControl={true} />
  );
};

export default MapComponent;
