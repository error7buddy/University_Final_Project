import React, { useState } from 'react';
import { Star } from 'lucide-react';

export default function HotelReview() {
  const [showAll, setShowAll] = useState(false);

  const reviews = [
    {
      id: 1,
      hotel: "Pan Pacific Sonargaon Dhaka",
      customer: "Ayesha Rahman",
      rating: 5,
      comment: "Amazing experience! Clean rooms, great service, and delicious food. Will visit again.",
      date: "Jul 2025",
    },
    {
      id: 2,
      hotel: "The Westin Dhaka",
      customer: "Ahmed Zaman",
      rating: 4,
      comment: "Very professional staff and comfortable beds. Rooftop pool was a highlight!",
      date: "Aug 2025",
    },
    {
      id: 3,
      hotel: "Radisson Blu Chittagong",
      customer: "Farhan Uddin",
      rating: 5,
      comment: "Loved the bay view and the breakfast spread. Great for business trips.",
      date: "Sep 2025",
    },
    {
      id: 4,
      hotel: "InterContinental Dhaka",
      customer: "Sarah Islam",
      rating: 4,
      comment: "Iconic hotel in the city. Felt safe and luxurious. A bit pricey though.",
      date: "Oct 2025",
    },
    {
      id: 5,
      hotel: "Seagull Hotel Cox’s Bazar",
      customer: "Nadia Afroz",
      rating: 5,
      comment: "Perfect location by the beach. Kids had a great time. Recommended!",
      date: "Jan 2026",
    },
  ];

  const visibleReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-10">
        Customer Reviews
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleReviews.map((review) => (
          <div
            key={review.id}
            className="bg-white border border-blue-200 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-blue-700">{review.hotel}</h3>
            <p className="text-gray-600 text-sm mb-1">By {review.customer}</p>
            <p className="text-gray-400 text-sm mb-2">{review.date}</p>

            <div className="flex items-center mb-3">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className={index < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                />
              ))}
            </div>

            <p className="text-gray-700 text-sm">{review.comment}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full transition"
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
}
