import React from 'react';

export default function HotelFooter() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Section */}
      <header className="py-8 px-4 sm:px-6 lg:px-8 text-center">
        <h1 style={{ fontFamily: 'Luckiest Guy, cursive' }} className="text-4xl font-bold text-blue-700 mb-4">Thank You</h1>
        <h2 style={{ fontFamily: 'Luckiest Guy, cursive' }} className="text-xl sm:text-1xl text-gray-700 max-w-3xl mx-auto italic">
          Book top-rated hotels with ease and comfort at your fingertips
        </h2>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-4 sm:px-6 lg:px-8 max-w-100% mx-auto">
        <p className="text-gray-600 mb-8 text-center sm:text-left sm:text-base">
          Welcome to Bangladesh’s most reliable hotel booking platform with 10,000+ hotels, resorts, and homestays.
          Whether it’s business, honeymoon, or family vacation – we bring you handpicked stays, exclusive deals, easy booking,
          and real-time availability. Enjoy top-class services, seamless check-ins, and 24/7 support with us.
        </p>
        <div className="border-t border-gray-300 my-8"></div>
      </main>

      {/* Footer Section */}
      <footer className="bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-500 mb-8">
            © 2025 H&R. All rights reserved.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <h3 style={{ fontFamily: 'Luckiest Guy, cursive' }} className="font-semibold text-blue-700 mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-700">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-700">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-700">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-700">Investor Relations</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-700">Help Center</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 style={{ fontFamily: 'Luckiest Guy, cursive' }} className="text-center font-semibold text-blue-700 mb-4">Hotel Services</h3>
              <ul className="space-y-2 text-center">
                <li><a href="#" className="text-gray-600 hover:text-blue-700">Room Booking</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-700">Conference Hall</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-700">Spa & Wellness</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-700">Airport Shuttle</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-700">Dining Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-700">Tour Packages</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 style={{ fontFamily: 'Luckiest Guy, cursive' }} className="text-right font-semibold text-blue-700 mb-4">Legal & Partners</h3>
              <ul className="space-y-2 text-right">
                <li><a href="#" className="text-gray-600 hover:text-blue-700">Become a Partner</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-700">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-700">Cancellation Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-700">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-700">Security Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-700">Affiliate Program</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
