import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {styled} from 'styled-components/native';
import neckImg from '../resources/neck.png';
import MapView, {Marker} from 'react-native-nmap';
import Geolocation from 'react-native-geolocation-service';

interface IPosition {
  latitude: number;
  longitude: number;
}
const INITIALPOSITION = {
  latitude: 37.4979,
  longitude: 127.0276,
};

const ProfileComponent: React.FC = () => {
  const [position, setPosition] = useState(INITIALPOSITION);

  const ProfileBox = styled.View`
    flex: 1;
    background-color: darkgray;
    padding: 10%;
  `;

  const ProfileImage = styled.Image`
    height: 20%;
    aspect-ratio: 1;
    overflow: hidden;
    object-fit: contain;
  `;

  const handleMapClick = ({latitude, longitude}: IPosition) => {
    console.log('Clicked Coordinate:', latitude, longitude);
    setPosition({latitude, longitude});
  };

  const MapViewBox = styled.View``;

  const MemoizedMapView = React.memo(() => (
    <MapView
      zoomControl={true}
      //   center={{
      //     latitude: position.latitude,
      //     longitude: position.longitude,
      //   }}
      onMapClick={handleMapClick}
      //   onCameraChange={handleCamChange}
      zoom={10}
      style={{flex: 1}}>
      <Marker coordinate={position} pinColor={'blue'} />
    </MapView>
  ));

  return (
    <ProfileBox>
      <MapViewBox style={{flex: 0.3}}>
        <MemoizedMapView />
      </MapViewBox>
      {/* <ProfileImage source={neckImg} alt="hihi" /> */}
      <Text>{`latitude: ${position.latitude} longitude: ${position.longitude}`}</Text>
    </ProfileBox>
  );
};

export default ProfileComponent;
