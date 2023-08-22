import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import "./MapsContact.css"

const containerStyle = {
  width: '1200px',
  height: '505px',
  marginTop:'80px',
  margin:'auto',

};



function MapContact() {
  return (
    
    <LoadScript className='mapsContact'
      googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" // Gerçek API anahtarınızla değiştirin
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={10}
      >
   Buttonwood, California.
Rosemead, CA 91770
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MapContact);

