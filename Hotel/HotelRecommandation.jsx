import React, { useState } from 'react';

export default function HotelRecommendations() {
  const [showAll, setShowAll] = useState(false);

  const allRecommendations = [
    {
      id: 1,
      title: "Pan Pacific Sonargaon Dhaka",
      location: "Dhaka, Bangladesh",
      subtitle: "Family vacation with Rahman family",
      details: ["Ayesha, Kamal, Sara and Rayhan 15 Dhanmondi", "Trip Advisor"],
      description: "One of Dhaka's most prestigious hotels offering luxurious accommodations with a blend of modern amenities and traditional Bangladeshi hospitality. Perfect for both business and leisure travelers.",
      date: "Jul 2025",
      showReadMore: true,
    },
    {
      id: 2,
      title: "The Westin Dhaka",
      location: "Dhaka, Bangladesh",
      subtitle: "Business trip with Ahmed & Co",
      location2: "Gulshan, Dhaka",
      description: "Contemporary luxury in the heart of the city with exceptional dining options and the famous Heavenly Bed. The rooftop pool offers stunning views of Dhaka's skyline.",
      date: "Aug 2025",
      showReadMore: true,
    },
    {
      id: 3,
      title: "Radisson Blu Chittagong Bay View",
      location: "Chittagong, Bangladesh",
      subtitle: "Coastal getaway with Farhan",
      location2: "Agrabad, Chittagong",
      description: "Situated along the Karnaphuli River, this hotel offers breathtaking bay views and easy access to Chittagong's business district and tourist attractions.",
      date: "Sep 2025",
      showReadMore: false,
    },
    {
      id: 4,
      title: "InterContinental Dhaka",
      location: "Dhaka, Bangladesh",
      description: "An iconic luxury hotel in the diplomatic zone of Dhaka, known for its exquisite dining options and world-class service.",
      date: "Oct 2025",
      showReadMore: true,
    },
    {
      id: 5,
      title: "The Peninsula Chittagong",
      location: "Chittagong, Bangladesh",
      description: "A premium business hotel with excellent conference facilities and comfortable accommodations in the port city.",
      date: "Nov 2025",
      showReadMore: true,
    },
    {
      id: 6,
      title: "Grand Sultan Tea Resort & Golf",
      location: "Sreemangal, Bangladesh",
      description: "Nestled in the tea gardens, this resort offers a unique experience with golf, spa treatments, and tea garden tours in Bangladesh's hill tracts.",
      date: "Dec 2025",
      showReadMore: true,
    },
    {
      id: 7,
      title: "Seagull Hotel Cox's Bazar",
      location: "Cox's Bazar, Bangladesh",
      description: "Beachfront property with direct access to the world's longest natural sea beach, offering water sports and seafood dining experiences.",
      date: "Jan 2026",
      showReadMore: true,
    },
    {
      id: 8,
      title: "Royal Tulip Sea Pearl Beach Resort",
      location: "Cox's Bazar, Bangladesh",
      description: "Luxury resort with private beach area, multiple pools, and spa facilities overlooking the Bay of Bengal.",
      date: "Feb 2026",
      showReadMore: true,
    },
    {
      id: 9,
      title: "The Palatial Luxury Hotel",
      location: "Sylhet, Bangladesh",
      description: "Elegant accommodations in the heart of Sylhet city, known for its tea gardens and Sufi shrines.",
      date: "Mar 2026",
      showReadMore: true,
    }
  ];

  const visibleRecommendations = showAll ? allRecommendations : allRecommendations.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-12 ">
        Recommandations
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {allRecommendations.map((rec) => (
          <div
            key={rec.id}
            className={`rounded-2xl shadow-xl transform transition-all duration-500 bg-white border-t-4 border-blue-500 hover:shadow-2xl hover:scale-105 ${
              visibleRecommendations.some(v => v.id === rec.id)
                ? 'opacity-100 max-h-[1000px]'
                : 'opacity-0 max-h-0 overflow-hidden'
            }`}
          >
            <div className="p-6">
              <h2 className="text-xl font-bold text-blue-800">{rec.title}</h2>
              <p className="text-sm text-blue-600 mt-1">{rec.location}</p>

              {rec.subtitle && (
                <>
                  <h3 className="text-md font-medium text-gray-700 mt-3">{rec.subtitle}</h3>
                  {rec.details && (
                    <ul className="mt-2 text-gray-600 space-y-1 pl-3 list-disc">
                      {rec.details.map((detail, index) => (
                        <li key={index}>
                          <span className="font-semibold">{detail.split(' ')[0]}</span>{" "}
                          {detail.split(' ').slice(1).join(' ')}
                        </li>
                      ))}
                    </ul>
                  )}
                  {rec.location2 && <p className="text-sm text-gray-600 mt-1">{rec.location2}</p>}
                  <hr className="my-4 border-gray-200" />
                </>
              )}

              <p className="text-gray-700">{rec.description}</p>
              <p className="text-sm text-gray-500 mt-5">📅 {rec.date}</p>

              <div className="mt-5 flex gap-3">
                {rec.showReadMore && (
                  <button className="px-4 py-1.5 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 font-medium transition">
                    Read More
                  </button>
                )}
                <button className="px-4 py-1.5 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 font-medium transition">
                  See Availability
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt- text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-800 shadow-md transition"
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
}
