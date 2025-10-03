"use client";

import dynamic from "next/dynamic";

// Dynamically import the map component to avoid SSR issues
const LocationMap = dynamic(() => import("@/components/LocationMap"), {
  ssr: false,
});

export default function EventDetailsWithMap() {
  // Coordinates for locations in Tbilisi (from Google Maps links)
  const churchLocation = { lat: 41.71716, lng: 44.76384 }; // ესაროს ეკლესია
  const restaurantLocation = { lat: 41.69384, lng: 44.83596 }; // ლისი მერე რესტორანი

  return (
    <div className="bg-amber-100/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-10 mb-12 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-yellow-700 mb-8 font-serif">
        ღონისძიების დეტალები:
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="text-center h-full">
          <div className="bg-white rounded-xl p-6 shadow-md h-full flex flex-col justify-between">
            <div className="text-3xl mb-4">⛪</div>
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">
              ჯვრისწერა 14:00
            </h3>
            <p className="text-base text-yellow-700 mb-1">
              ყოველთა წმინდათა ტაძარი
            </p>
            <p className="text-base text-yellow-800 font-bold">
              კიბალჩიჩის აღმართი
            </p>
          </div>
        </div>

        <div className="text-center h-full">
          <div className="bg-white rounded-xl p-6 shadow-md h-full flex flex-col justify-between">
            <div className="text-3xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">
              რესტორანი 17:00
            </h3>
            <p className="text-base text-yellow-700 mb-1">ლისი მერე</p>
            <p className="text-base text-yellow-700">(მწვანე დარბაზი)</p>
            <p className="text-sm text-yellow-600 mt-2">ლისის ტბა, თბილისი</p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="bg-white rounded-xl p-4 shadow-md">
        <LocationMap
          center={[
            (churchLocation.lat + restaurantLocation.lat) / 2,
            (churchLocation.lng + restaurantLocation.lng) / 2,
          ]}
          markers={[
            {
              position: [churchLocation.lat, churchLocation.lng],
              title: "ჯვრისწერა - 14:00",
              description: "ყოველთა წმინდათა ტაძარი, კიბალჩიჩის აღმართი",
            },
            {
              position: [restaurantLocation.lat, restaurantLocation.lng],
              title: "რესტორანი - 17:00",
              description: "ლისი მერე (მწვანე დარბაზი), ლისის ტბა",
            },
          ]}
        />
      </div>
      <div className="flex justify-center">
        <div className="mt-8 animate-bounce">
          <svg
            className="w-8 h-8 mx-auto text-yellow-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
        <div className="mt-8 animate-bounce">
          <svg
            className="w-8 h-8 mx-auto text-yellow-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
        <div className="mt-8 animate-bounce">
          <svg
            className="w-8 h-8 mx-auto text-yellow-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
