import React from "react";
import { Marker,Popup } from "react-leaflet";
import { IconLocation } from "./IconLocation";


const Markers = (props) => {
  const { places } = props;
//esta propiedad verifica si esta en un arreglo
  console.log("Tipo de datos de places:", typeof places); // Verificar el tipo de datos de places

  const markers = places.places.map((place, i) => (
    <Marker key={i} position={place.geometry} icon={IconLocation}>
      <Popup> nombre: {place.name} <br/> humedad: {place.humidity}<br/>temp: {place.temperature}</Popup>
    </Marker>
  ));
  return markers;
};

export default Markers;
