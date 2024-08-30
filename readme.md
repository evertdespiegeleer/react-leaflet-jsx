# react-leaflet-jsx

`react-leaflet-jsx` is a lightweight NPM package that allows you to render arbitrary JSX content directly onto a React Leaflet map.
Easily place any React component or HTML element at specific coordinates on the map!

## Demo

Check out the interactive demo: [https://evertdespiegeleer.github.io/react-leaflet-jsx/](https://evertdespiegeleer.github.io/react-leaflet-jsx/)

## Installation

Install the package using npm or yarn:

```sh
npm install react-leaflet-jsx
```

## Usage

`react-leaflet-jsx` integrates smoothly within a `MapContainer`. Use the JSXMapContent component and pass a position to place any JSX content at that point on the map.


```tsx
import { MapContainer } from 'react-leaflet';
import { JSXMapContent } from 'react-leaflet-jsx';

const position = {{ lat: 50, lng: 3 }}

function MyMap() {
  return (
    <MapContainer center={position} zoom={13} style={{ height: '100vh' }}>
      <JSXMapContent location={position}>
        <div>
          This div is placed at the specified position on the map, you can put whatever here!
        </div>
      </JSXMapContent>
    </MapContainer>
  );
}
```

Happy mapping! 🌎