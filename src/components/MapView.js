import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import Markers from "./Markers";
//marcadoresVarios
import  places  from "../assets/data.json";

const MapView = () => {
  
  const [state,setState]= useState({
    correntLocation:{lat:"-0.96212",lng: "-80.71271"},
    zoom:13,
  })
  return (
    //latitud y logitud inicial
    <MapContainer center={state.correntLocation} zoom={state.zoom}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers  places={places}/>
    </MapContainer>
  );
};

export default MapView;
