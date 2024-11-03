import React from 'react';
import { WebView } from 'react-native-webview';

interface Prop {
  latitude: number
  longitude: number
}

const MapWebView: React.FC<Prop> = ({ latitude, longitude }) => {
  const mapHTML = `
  <!DOCTYPE html>
  <html>
  <head>
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <style>
      #map { height: 100vh; width: 100vw; }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script>
      var map = L.map('map').setView([${latitude}, ${longitude}], 18);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 100
      }).addTo(map);

      // Add a marker at the specified coordinates
      var marker = L.marker([${latitude}, ${longitude}]).addTo(map);

      // Function to update the marker position dynamically
      window.updateMapLocation = function(lat, lng) {
        map.setView([lat, lng], 13);
        marker.setLatLng([lat, lng]);
      };
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
