import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';

import { NativeModules } from 'react-native';
import { setBadgeCount } from './zzz';


interface Prop {
  latitude1: number
  longitude1: number
  latitude2: number
  longitude2: number
  uri: string
}


const MapWebView: React.FC<Prop> = ({ latitude1, longitude1, latitude2, longitude2, uri }) => {
  const mapHTML = `
  <!DOCTYPE html>
  <html>
  <head>
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet-routing-machine/3.2.12/leaflet-routing-machine.min.js"></script>
    <style>
      #map { height: 100vh; width: 100vw; }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script>
      var map = L.map('map').setView([${latitude1}, ${longitude1}], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 100
      }).addTo(map);
  
      // Add routing control for directions
      L.Routing.control({
        waypoints: [
          L.latLng(${latitude1}, ${longitude1}),
          L.latLng(${latitude2}, ${longitude2})
        ],
        routeWhileDragging: true,
        showAlternatives: true,
        lineOptions: {
          styles: [{ color: 'blue', weight: 4, opacity: 0.7 }]
        }
      }).addTo(map);
    </script>
  </body>
  </html>
`;


  return (
    <WebView
      originWhitelist={['*']}
      source={{ html: mapHTML }}
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      injectedJavaScript=""
    />
  );
};

export default MapWebView;
