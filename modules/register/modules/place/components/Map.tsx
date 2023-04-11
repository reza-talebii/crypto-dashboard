'use client'

import React from 'react'

import { MapContainer, TileLayer, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const position = { lat: 36.7589, lng: 64.5691 }

const Map = () => {
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} touchZoom fadeAnimation={true}>
      <TileLayer attribution="" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Circle radius={40} center={[36.7589, 64.5691]} bubblingMouseEvents={true} dashArray={[36.7589, 64.5691]} />

      {/* <MapMarkers userPosition={userPosition} ref={mapMarkerRef} /> */}
    </MapContainer>
  )
}

export default Map
