'use client'

import React, { FC, Suspense } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import PreLoading from '@/components/PreLoading'
import dynamic from 'next/dynamic'
import { IPosition } from '@/modules/register/models/interfaces'
const MapMarker = dynamic<any>(() => import('./MapMarker').then(module => module), {
  ssr: false,
})

interface IProps {
  position: IPosition
  setPosition: (position: IPosition) => void
}

const Map: FC<IProps> = ({ position, setPosition }) => {
  return (
    <MapContainer
      center={position}
      zoom={10}
      scrollWheelZoom
      touchZoom
      fadeAnimation={true}
      boxZoom
      doubleClickZoom
      markerZoomAnimation
      zoomControl
    >
      <TileLayer attribution="" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Suspense fallback={<PreLoading />}>
        <MapMarker position={position} setPosition={setPosition} />
      </Suspense>
    </MapContainer>
  )
}

export default Map
