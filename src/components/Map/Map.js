import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const customIcon = new L.Icon({
  iconUrl: icon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: iconShadow,
  shadowSize: [41, 41],
});

const EcoMap = () => (
  <MapContainer center={[-36.625245031561064, -64.30154528823932]} zoom={16} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[-36.625245031561064, -64.30154528823932]} icon={customIcon}>
      <Popup>
       ¡Vení a visitarnos a Ecoclean!. <br /> Te esperamos en Avenida Uruguay 785
      </Popup>
    </Marker>
  </MapContainer>
);

export default EcoMap;
