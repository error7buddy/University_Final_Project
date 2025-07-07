import React, { useState } from "react";
import travelVideo from "./Hotel Cinematic  - Boutique Hotel Port Elizabeth.mp4";
import HotelReview from "./HotelRecommandation";
import HotelRecommendations from "./HotelRecommandation";
import HotelFooter from "../src/Footer/HotelFooter";
import HotelNavbar from "../src/Header/HotelNavbar";
import PaymentMethodsCarousel from "./PaymentMethodsCarousel"; // ✅ FIXED
import SpecialOffersCarousel from "./SpecialOffersCarousel";

export default function HotelHome() {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1 room, 2 guests");

  return (
    <div>
      <HotelNavbar/>
    <div>
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src={travelVideo}
        muted
        loop
        autoPlay
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      {/* Blue transparent overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-blue-900/40 -z-10" />

      {/* Content Overlay */}
      <div className="flex flex-col justify-center items-center text-center min-h-screen px-4 z-10 text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Save on Hotels</h1>
        <p className="text-xl md:text-2xl mt-2 mb-8 italic">Book beyond your wildest means</p>

        {/* Booking Input Group */}
        <div className="flex flex-col md:flex-row gap-3 w-full max-w-4xl bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-lg text-white">
          {/* Location input */}
          <input
            type="text"
            placeholder="Where to?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-1 p-3 border border-white/60 bg-transparent text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Check-in date */}
          <div className="flex-1 flex flex-col">
            <label className="mb-1 text-white font-medium" htmlFor="check-in">
              Check-in
            </label>
            <input
              id="check-in"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="p-3 border border-white/60 bg-transparent text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Check-out date */}
          <div className="flex-1 flex flex-col">
            <label className="mb-1 text-white font-medium" htmlFor="check-out">
              Check-out
            </label>
            <input
              id="check-out"
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="p-3 border border-white/60 bg-transparent text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Guests dropdown */}
          <div className="flex-1 flex flex-col">
            <label className="mb-1 text-white font-medium" htmlFor="guests-select">
              Guests
            </label>
            <select
              id="guests-select"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="p-3 border border-white/60 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option className="text-black">1 room, 1 guest</option>
              <option className="text-black">1 room, 2 guests</option>
              <option className="text-black">2 rooms, 3 guests</option>
              <option className="text-black">2 rooms, 4 guests</option>
              <option className="text-black">3 rooms, 5 guests</option>
              <option className="text-black">3 rooms, 6 guests</option>
            </select>
          </div>

          {/* Find hotel button */}
          <button className="bg-blue-700 text-white font-semibold px-6 py-4 rounded-md transition hover:bg-white hover:text-blue-700 border border-blue-700">
            Find a hotel
          </button>
        </div>
      </div>
      </div>
      <HotelRecommendations />
      <SpecialOffersCarousel />
      <PaymentMethodsCarousel />
      <HotelFooter />
    </div>
    </div>
  );
}
