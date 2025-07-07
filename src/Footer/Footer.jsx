import React from 'react';

export default function Footer() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Section */}
      <header className="py-8 px-4 sm:px-6 lg:px-8 text-center">
        <h1 style={{fontFamily:'Luckiest Guy, cursive'}} className="text-4xl font-bold text-red-600 mb-4">Thank You</h1>
        <h2 style={{fontFamily:'Luckiest Guy, cursive'}} className="text-xl sm:text-1xl text-gray-700 max-w-3xl mx-auto font-style: italic">
          Order food from the best restaurants and shops with us
        </h2>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-4 sm:px-6 lg:px-8 max-w-100% mx-auto">
        <p className="text-gray-600 mb-8 text-center sm:text-left sm:text-base">
          Bangladesh's leading food delivery app with over 5000+ restaurants along with amazing deals and services. 
          Discover a world of culinary delights and flavorful experiences with us, your ultimate food destination. 
          We specialize and offer four different services which include – super-fast delivery, on-time food pick-up, 
          delightful dine-in experience, and last but not least, flowers will be delivered to your doorstep on special 
          occasions for your loved ones.
        </p>

        <div className="border-t border-gray-300 my-8"></div>
      </main>

      {/* Footer Section */}
      <footer className="bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-500 mb-8">
            © Copyright 2025 H&R Express Limited. All rights reserved.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <h3 style={{fontFamily:'Luckiest Guy, cursive'}} className="font-semibold text-red-600 mb-4">About us</h3>
              <ul className="space-y-2 ">
                <li><a href="#" className="text-gray-600 hover:text-red-600">Contact us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600">Press</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600">How it works</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600">Download apps</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600">Help & support</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 style={{fontFamily:'Luckiest Guy, cursive'}} text-gray-600 className="font-semibold text-red-600 mb-4 text-center">Food delivery</h3>
              <ul className="space-y-2 text-center">
                <li><a href="#" className="text-gray-600 hover:text-red-600">Pick-up</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600">Dine-in</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600">Flowers delivery</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600">Super subscription</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600">Great deals</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600">Reward programmes</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600">Terms Of Referral and Condition</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 style={{fontFamily:'Luckiest Guy, cursive'}} text-gray-600 className="text-right font-semibold text-red-600 mb-4">Partner with us</h3>
              <ul className="space-y-2 text-right">
                <li><a href="#" className="text-gray-600 hover:text-red-600">Ride with us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600">Terms & conditions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600">Refund & cancellation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600">Privacy policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600">Rider Privacy policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600">Partner Privacy policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600">Security policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
