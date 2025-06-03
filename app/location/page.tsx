"use client"
import React, { useEffect, useState } from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define types for coordinates
interface Coordinates {
    lat: number;
    lng: number;
}

// Fix for Leaflet marker icon issue in React
const defaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = defaultIcon;

const LocationMap: React.FC = () => {
    // State to store user's coordinates
    const [position, setPosition] = useState<Coordinates>({ lat: 40.7128, lng: -74.0060 }); // Default: New York City
    const [error, setError] = useState<string | null>(null);

    // Fetch user's location using Geolocation API
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords;
                    setPosition({ lat: latitude, lng: longitude });
                    setError(null);
                },
                (err) => {
                    setError('Unable to retrieve location. Using default location.');
                    console.error(err);
                },
                { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Your Location</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="w-full max-w-4xl h-[500px] border-2 border-gray-300 rounded-lg shadow-lg">
                <MapContainer
                    center={[position.lat, position.lng]}
                    zoom={13}
                    style={{ height: '100%', width: '100%' }}
                    className="rounded-lg"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[position.lat, position.lng]}>
                        <Popup>You are here!</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default LocationMap;