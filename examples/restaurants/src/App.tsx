import { MapContainer, TileLayer } from 'react-leaflet'
import { JSXMapContent } from '../../../src/Component'
import 'leaflet/dist/leaflet.css'
import { InteractiveRestaurantMarker, type Props as InteractiveRestaurantMarkerProps } from './components/InteractiveRestaurantMarker'
import { useMemo, useState } from 'react'

const centerPosition = {
  lat: 52.5190489592301,
  lng: 13.401065393273731
}

interface Restaurant {
  position: {
    lat: number;
    lng: number
  }
  details: InteractiveRestaurantMarkerProps
}

const restoEmojis = ['🍔', '🌭', '🍕', '🍟', '🍝', '🍣', '🍳', '🥑', '🍱', '🍛'] as const

function App() {
  const [focussedRestaurantIndex, setFocussedRestaurantIndex] = useState<number | undefined>()

  const restaurantsData = useMemo<Restaurant[]>(() => new Array(25).fill(null).map((_val, index) => ({
    position: {
      lat: centerPosition.lat + Math.random() * 0.1 - 0.05,
      lng: centerPosition.lng + Math.random() * 0.1 - 0.05
    },
    details: {
      name: `Restaurant ${index + 1}`,
      rating: 1 + Math.round(Math.random() * 4) as 1 | 2 | 3 | 4 | 5,
      averagePrice: Math.round(Math.random() * 100),
      ratingCount: Math.round(Math.random() * 3000),
      emoji: restoEmojis[Math.floor(Math.random() * restoEmojis.length)]
    }
  })), [])

  return (
    <MapContainer center={centerPosition} zoom={14} style={{
      height: '100vh',
      width: '100vw'
    }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {
      restaurantsData.map((restaurant, index) => (
        <JSXMapContent location={restaurant.position} key={index}>
          <InteractiveRestaurantMarker {...restaurant.details} onFocus={() => setFocussedRestaurantIndex(index)} onBlur={() => setFocussedRestaurantIndex(undefined)} focussed={index === focussedRestaurantIndex}/>
        </JSXMapContent>
      ))
    }
  </MapContainer>
  )
}

export default App
