'use client'

import React, { FC } from 'react'
import L from 'leaflet'
import { useMapEvent, Marker } from 'react-leaflet'
import { IPosition } from '@/modules/register/models/interfaces'

interface IProps {
  position: IPosition
  setPosition: React.Dispatch<React.SetStateAction<IPosition>>
}

const MapMarker: FC<IProps> = ({ position, setPosition }) => {
  useMapEvent('click', e => {
    setPosition({ lat: e.latlng.lat, lng: e.latlng.lng })
  })

  const customIcon = new L.Icon({
    iconUrl: '/assets/images/map/pointer-map.png',
    iconRetinaUrl: '/assets/images/map/pointer-map.png',
    iconSize: [40, 40],
  })

  return <Marker position={position} icon={customIcon} />
}

export default MapMarker
