import React, { useState } from 'react';
import { Map, Marker } from 'pigeon-maps';

const MapComponent = () => {
    const [zoom, setZoom] = useState(15); // Initial zoom level
    const position = [43.5304, -80.3009]; // Coordinates for 47 Peartree Crescent, Guelph

    return (
        <div className="map-container">
            <Map
                height={400}
                center={position}
                zoom={zoom}
                onBoundsChanged={({ zoom }) => setZoom(zoom)}
                style={{ borderRadius: '10px', overflow: 'hidden' }}
            >
                <Marker anchor={position} />
            </Map>
        </div>
    );
};

export default MapComponent;
