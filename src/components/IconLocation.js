import L from "leaflet";

export const IconLocation = L.icon({
  iconUrl: require("../assets/marcador-de-posicion.png"),
  iconRetinaUrl: require("../assets/marcador-de-posicion.png"),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [25, 25],
  className: "Leaflet-venue-icon",
});
