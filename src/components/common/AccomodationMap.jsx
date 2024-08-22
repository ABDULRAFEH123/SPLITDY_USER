"use client";
import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
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

const AccomodationMap = ({ accomodate }) => {
  console.log(accomodate?.accomodate?.location, "its all the accomodate");
  const [isMounted, setIsMounted] = useState(false);
  const [mapOptions, setMapOptions] = useState({});
  const [showCard, setShowCard] = useState(true);
  const [locationMarkers, setLocationMarkers] = useState([]);
  const mapRef = useRef(null);

  const defaultCenter = {
    lat: 51.5074, // London's latitude
    lng: -0.1278, // London's longitude
  };

  useEffect(() => {
    setIsMounted(true);
    if (window.google) {
      setMapOptions({
        styles: mapStyles,
        mapTypeId: "roadmap",
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

    if (accomodate && accomodate.location) {
      const locations = accomodate.location.split(", ");
      const geocodePromises = locations.map((location) =>
        geocodeLocation(location)
      );

      Promise.all(geocodePromises)
        .then((results) => {
          console.log(results, "Geocoded results");
          setLocationMarkers(results.filter((result) => result !== null));
        })
        .catch((error) => console.error("Geocoding error:", error));
    }
  }, [accomodate]);

  const geocodeLocation = async (location) => {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      location
    )}&key=${API_KEY}`;

    try {
      const response = await axios.get(url);
      const { results } = response.data;
      if (results.length > 0) {
        const { lat, lng } = results[0].geometry.location;
        return {
          position: { lat, lng },
          label: location,
          count: 1, // Example count, replace with actual data if needed
        };
      }
    } catch (error) {
      console.error("Error fetching geocode data:", error);
    }
    return null;
  };

  const mapContainerStyle = {
    width: "100%",
    height: "75vh",
  };

  const zoom = 10; // Adjusted zoom level to focus on the location better
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
            center={
              locationMarkers.length > 0
                ? locationMarkers[0].position
                : defaultCenter
            }
            zoom={zoom}
            options={mapOptions}
            onLoad={() => console.log("GoogleMap Loaded")}
            onUnmount={() => console.log("GoogleMap Unmounted")}
            onError={(error) => console.error("GoogleMap Error:", error)}
            ref={mapRef}
          >
            {locationMarkers.map((marker, index) => {
              console.log("Marker Position:", marker.position); // Log marker position to verify coordinates
              return (
                marker && (
                    <Marker
                    key={index}
                    position={marker.position}
                    onLoad={() => console.log("Marker Loaded")}
                    onError={(error) => console.error("Marker Error:", error)}
                  />
                  
                )
              );
            })}
          </GoogleMap>
        </LoadScript>
      )}
      {showCard && <CardMap onClose={() => setShowCard(false)} />}
    </div>
  );
};

export default AccomodationMap;
