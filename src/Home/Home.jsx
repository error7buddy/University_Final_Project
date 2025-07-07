import React, { useState, useEffect, useRef } from 'react';
import travelVideo from '../assets/Food Showreel - Zaeem Asad.mp4';
import Section2 from '../Main/Section2';
import FavoriteList from '../Main/FavoriteList';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';

export default function Home() {
  const [location, setLocation] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.google && window.google.maps && window.google.maps.places && inputRef.current) {
        const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
          types: ['geocode'],
        });

        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace();
          setLocation(place.formatted_address || place.name || '');
        });

        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="relative min-h-screen w-full">
        {/* Background Video */}
        <video
          src={travelVideo}
          muted
          loop
          autoPlay
          className="fixed top-0 left-0 w-full h-full object-cover opacity-80 -z-10"
        ></video>

        {/* Overlay */}
        <div className="fixed top-0 left-0 w-full h-full bg-[#c91a1a] mix-blend-overlay -z-10"></div>

        {/* Hero Section */}
        <section className="pt-24 px-4 sm:px-8 min-h-screen w-full flex flex-col justify-center items-start bg-black/80">
          <div className="relative z-10 max-w-4xl text-white">
            <h2
              style={{ fontFamily: 'Luckiest Guy, cursive' }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-tight"
            >
              Eat Fresh <br />
              Get Delivery so Fast
            </h2>
            <p
              style={{ fontFamily: 'Luckiest Guy, cursive' }}
              className="mt-4 text-base sm:text-lg max-w-xl"
            >
              Order dishes from favorite restaurants near you.
            </p>

            {/* Search Bar */}
            <div className="mt-6 max-w-xl w-full">
              <div className="flex flex-col sm:flex-row items-stretch border border-gray-300 rounded-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="Enter your location"
                  value={location}
                  ref={inputRef}
                  onChange={(e) => setLocation(e.target.value)}
                  style={{ fontFamily: 'Luckiest Guy, cursive' }}
                  className="placeholder-white w-full px-4 py-3 text-base text-white bg-transparent focus:outline-none"
                />
                <button
                  style={{ fontFamily: 'Luckiest Guy, cursive' }}
                  className="w-full sm:w-auto px-4 py-3 bg-red-600 text-white font-bold uppercase hover:bg-red-700 transition-colors text-sm"
                >
                  Find Food
                </button>
              </div>
            </div>

            {/* Dynamic Map */}
            {location && (
              <div className="mt-10 w-full max-w-4xl">
                <h3 className="text-white text-xl mb-2" style={{ fontFamily: 'Luckiest Guy, cursive' }}>
                  Showing nearby Restaurants & Hotels in {location}:
                </h3>
                <div className="mapouter w-full h-[450px]">
                  <div className="gmap_canvas w-full h-full">
                    <iframe
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps/embed/v1/search?q=${encodeURIComponent(
                        location + ', Restaurants, Hotels'
                      )}&key=AIzaSyDaRCEfupAan_kSTMEuCTPasP-VrYDQMWo`}
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Rest of the content */}
        <div className="relative z-10 bg-white">
          <FavoriteList />
          <Section2 />
          <Footer />
        </div>
      </div>
    </div>
  );
}
