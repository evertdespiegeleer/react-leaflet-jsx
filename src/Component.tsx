import { type ReactNode, useEffect } from 'react'
import { useMap } from 'react-leaflet'
import L from 'leaflet'
import ReactDOM from 'react-dom/client'
import './styling.css'

interface Props {
  location: L.LatLngExpression
  children?: ReactNode
}

export function JSXMapContent (props: Props) {
  const map = useMap()
  useEffect(() => {
    const marker = L.marker(props.location, {
      icon: L.divIcon({
        html: '<div></div>',
        className: 'jsxMapMarker'
      })
    }).addTo(map)

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const container = marker.getElement()!
    const root = ReactDOM.createRoot(container)

    root.render(
        <div className='jsxMapMarkerContent'>
          {props.children}
        </div>
    )

    return () => {
      marker.removeFrom(map)
    }
  }, [props.children])

  return undefined
}
