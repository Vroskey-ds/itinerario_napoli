'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet icons (optional, we use custom DivIcons anyway, but good for defaults)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default?.src || 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: require('leaflet/dist/images/marker-icon.png').default?.src || 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: require('leaflet/dist/images/marker-shadow.png').default?.src || 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Create a component to re-center map when day changes
function RecenterMap({ events }) {
  const map = useMap();
  useEffect(() => {
    if (events && events.length > 0) {
      const bounds = L.latLngBounds(events.map(e => [e.location.lat, e.location.lng]));
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 15 });
    }
  }, [events, map]);
  return null;
}

export default function DynamicMap({ events }) {
  if (!events || events.length === 0) return null;

  return (
    <>
      <MapContainer 
        center={[40.8522, 14.2681]} 
        zoom={13} 
        style={{ height: '100%', width: '100%', zIndex: 0 }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <RecenterMap events={events} />
        
        {events.map((evt, index) => {
          const typeClass = `marker-${evt.type}`;
          const customIcon = L.divIcon({
            className: `custom-leaflet-marker ${typeClass}`,
            html: `<span>${index + 1}</span>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15]
          });

          return (
            <Marker 
              key={evt.id} 
              position={[evt.location.lat, evt.location.lng]} 
              icon={customIcon}
            >
              <Popup>
                <div style={{ padding: '2px', textAlign: 'center' }}>
                  <h3 style={{ margin: '0 0 5px 0', fontSize: '14px', fontWeight: 'bold' }}>{evt.title}</h3>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(evt.location.mapQuery || evt.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#2563eb', fontWeight: 'bold', textDecoration: 'none' }}
                  >
                    📍 Apri in Google Maps
                  </a>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
      
      {/* Legend Overlay */}
      <div className="map-legend">
        <div className="legend-item">
          <span className="legend-dot marker-travel"></span> Percorso
        </div>
        <div className="legend-item">
          <span className="legend-dot marker-food"></span> Cibo
        </div>
        <div className="legend-item">
          <span className="legend-dot marker-attraction"></span> Visita
        </div>
        <div className="legend-item">
          <span className="legend-dot marker-hotel"></span> Hotel
        </div>
      </div>
    </>
  );
}
