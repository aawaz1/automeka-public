import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 0,
  lng: 0
};

function AddressMapPicker({ onAddressSelect }) {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setSelectedLocation({ lat, lng });
    // Reverse geocode to get the address
    // You may need to use a service like the Google Maps Geocoding API to get the address based on the latitude and longitude
    // Example: https://developers.google.com/maps/documentation/geocoding/start
    // After obtaining the address, you can pass it to the onAddressSelect function
    onAddressSelect({ lat, lng }); // Pass the latitude and longitude to the parent component
  };

  return (
    <LoadScript googleMapsApiKey={"AIzaSyAFBYOpcK6XARiLCF29vZXVol7GLkmlzTc"}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
        onClick={handleMapClick}
      >
        {selectedLocation && <Marker position={selectedLocation} />}
      </GoogleMap>
    </LoadScript>
  );
}

export default AddressMapPicker;
