import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  FeatureGroup,
  Circle,
  Rectangle
} from "react-leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";

export default function Map() {
  const blueOptions = { color: "blue" };

  const center = [-6.2088, 106.8456];
  const rectangle = [
    [-6.1213, 106.7113],
    [-6.2963, 106.9896]
  ];

  return (
    <MapContainer
      className="w-full h-[500px]"
      center={center}
      zoom={11}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FeatureGroup pathOptions={blueOptions}>
        <Popup>Total Case : 12.000</Popup>
        <Rectangle bounds={rectangle} />
      </FeatureGroup>
    </MapContainer>
  );
}
