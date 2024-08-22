"use client";
import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import CardMap from "../common/CardMap";

const GoogleMap = dynamic(
  () => import("@react-google-maps/api").then((mod) => mod.GoogleMap),
  { ssr: false }
);
const Marker = dynamic(
  () => import("@react-google-maps/api").then((mod) => mod.Marker),
  { ssr: false }
);
const LoadScript = dynamic(
  () => import("@react-google-maps/api").then((mod) => mod.LoadScript),
  { ssr: false }
);

const Map = ({ itinerary }) => {
  console.log(itinerary, "its all the itineraries in MAP..");
  const [isMounted, setIsMounted] = useState(false);
  const [mapOptions, setMapOptions] = useState({});
  const [showCard, setShowCard] = useState(true);
  const mapRef = useRef(null);

  // Default center if no location is provided
  const defaultCenter = {
    lat: -41.2865,
    lng: 174.7762,
  };

  // If itinerary has a location, set center based on that (you might need geocoding if using a name)
  const center =
    itinerary && itinerary.location
      ? {
          lat: itinerary.location.lat || defaultCenter.lat,
          lng: itinerary.location.lng || defaultCenter.lng,
        }
      : defaultCenter;

  useEffect(() => {
    setIsMounted(true);
    if (window.google) {
      setMapOptions({
        styles: mapStyles,
        mapTypeId: "default",
        mapTypeControl: true,
        disableDefaultUI: true,
        zoomControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        gestureHandling: "greedy",
        zoomControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_BOTTOM,
        },
        fullscreenControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_TOP,
        },
        streetViewControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_TOP,
        },
      });
    }
  }, []);

  const mapContainerStyle = {
    width: "100%",
    height: "75vh",
  };

  const zoom = 5;

  const markers = itinerary?.markers || [
    { position: { lat: -36.8485, lng: 174.7633 }, label: "Auckland", count: 3 },
    {
      position: { lat: -41.2865, lng: 174.7762 },
      label: "Wellington",
      count: 7,
    },
    {
      position: { lat: -43.532, lng: 172.6362 },
      label: "Christchurch",
      count: 5,
    },
    {
      position: { lat: -45.0312, lng: 168.6626 },
      label: "Queenstown",
      count: 8,
    },
  ];

  const mapStyles = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#ebe3cd",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#523735",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#f5f1e6",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#c9b2a6",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#dcd2be",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#ae9e90",
        },
      ],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#93817c",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#a5b076",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#447530",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f1e6",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#fdfcf8",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#f8c967",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#e9bc62",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [
        {
          color: "#e98d58",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#db8555",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#806b63",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8f7d77",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#ebe3cd",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#94D5F7",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#94D5F7",
        },
      ],
    },
  ];

  return (
    <div className="relative flex flex-col w-full items-start justify-start h-[75vh]">
      {isMounted && (
        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
          onLoad={() => console.log("LoadScript Loaded")}
          onError={(error) => console.error("LoadScript Error:", error)}
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={zoom}
            options={mapOptions}
            onLoad={() => console.log("GoogleMap Loaded")}
            onUnmount={() => console.log("GoogleMap Unmounted")}
            onError={(error) => console.error("GoogleMap Error:", error)}
            ref={mapRef}
          >
            {markers.map((marker, index) => (
              <Marker
                key={index}
                position={marker.position}
                icon={{
                  url:
                    "data:image/svg+xml;charset=UTF-8," +
                    encodeURIComponent(`
                    <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="25" cy="25" r="20" fill="rgba(74, 144, 226, 0.6)" />
                      <circle cx="25" cy="25" r="15" fill="#4A90E2" />
                      <text x="25" y="30" text-anchor="middle" font-size="14" font-family="Arial" font-weight="bold" fill="#ffffff">${marker.count}</text>
                    </svg>
                  `),
                }}
                onLoad={() => console.log("Marker Loaded")}
                onError={(error) => console.error("Marker Error:", error)}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      )}
      {showCard && <CardMap onClose={() => setShowCard(false)} />}
    </div>
  );
};

export default Map;
