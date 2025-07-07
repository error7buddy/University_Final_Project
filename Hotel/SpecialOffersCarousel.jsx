import React, { useState, useRef, useEffect } from "react";

export default function SpecialOffersSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const offers = [
    {
      title: "Up to 35% OFF (upto Rs.6,000)",
      description: "On Domestic Hotels",
      terms: "*Offers is Valid Only On Confirmed Hotel Bookings",
      code: "YTIGICIEMI",
      image: "/Hotel/image1.png",
    },
    {
      title: "Up to 25% Off",
      description: "On Domestic Hotels",
      terms: "*Offers is Valid On UPI Transactions Only",
      code: "YTUPI",
        image: "/Hotel/image2.png",
    },
    {
      title: "Up to 35% Off (up to Rs. 6000)",
      description: "On Domestic Hotels",
      terms: "*Offer Valid On Anti Bank Credit Can EMI Transactions Only",
      code: "YRAXISEMI",
        image: "/Hotel/image3.png",
    },
    {
      title: "Weekend Special 40% Off",
      description: "On Luxury Hotels",
      terms: "*Valid Friday to Sunday only",
      code: "WEEKEND40",
    image: "/Hotel/image1.png",
    },
    {
      title: "Flat Rs. 5000 Off",
      description: "On International Bookings",
      terms: "*Minimum booking of Rs. 25000",
      code: "INTL5000",
        image: "/Hotel/image3.png",
    },
    {
      title: "Buy 1 Night Get 1 Free",
      description: "On Selected Resorts",
      terms: "*Limited period offer",
      code: "B1G1",
       image: "/Hotel/image2.png",
    },
  ];

  // Drag start
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll-fastness factor
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">Special Offers</h1>
      <h2 className="text-xl font-semibold mb-6 text-blue-600 text-center">Hotels</h2>

      <div
        ref={sliderRef}
        className="flex overflow-x-scroll scrollbar-hide gap-6 cursor-grab active:cursor-grabbing transition-all"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {offers.map((offer, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[300px] bg-white rounded-xl shadow-md"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4 flex flex-col justify-between h-64">
              <div>
                <h3 className="text-lg font-bold text-blue-700">{offer.title}</h3>
                <p className="text-gray-600">{offer.description}</p>
                <p className="text-sm text-gray-500 italic">{offer.terms}</p>
                <span className="mt-2 inline-block bg-gray-100 p-1 px-2 rounded text-sm font-mono font-semibold">
                  {offer.code}
                </span>
              </div>
              <button className="mt-4 bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-white hover:text-blue-700 hover:border hover:border-blue-700 transition">
                View Details &gt;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
