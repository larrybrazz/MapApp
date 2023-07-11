import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import SearchInput from "./SearchInput";

// Custom marker component

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function MapContainer() {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });

  const apiKey = import.meta.env.VITE_API_KEY

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({lat: latitude, lng: longitude})
        },
        (error) => {
          console.error("Error retrieving user location:", error)
        }
      )
    }
  }, [])

  const userMarkerProps = {
    lat: userLocation.lat,
    lng: userLocation.lng,
    text: "Your Location"
  }

  const markerProps = {
    lat: coordinates.lat,
    lng: coordinates.lng,
    text: "Caravan Location",
  };

  return (
    <>
      <SearchInput setCoordinates={setCoordinates} />
      {/* // Important! Always set the container height explicitly */}
      <div style={{ height: "500px", width: "100%", position: "relative" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: apiKey
          }}
          center={coordinates}
          defaultZoom={11}
        >
          <AnyReactComponent {...markerProps} />
          <AnyReactComponent {...userMarkerProps} />
        </GoogleMapReact>
      </div>
    </>
  );
}
