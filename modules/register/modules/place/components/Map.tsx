'use client'

import React from 'react'

import { MapContainer, TileLayer, Circle, Popup, Marker } from 'react-leaflet'

import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

const position = [51.505, -0.09]

const Map = () => {
  return (
    <MapContainer center={{ lat: 32, lng: 23 }} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        // attribution={'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
