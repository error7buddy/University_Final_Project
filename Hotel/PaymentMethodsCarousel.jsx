import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import amexLogo from '../Hotel/American_Express_logo_(2018).svg.png';
import strLogo from '../Hotel/Stripe_Logo,_revised_2016.svg';

const paymentMethods = [
  {
    id: 1,
    name: "Visa",
    description: "Pay securely with your Visa credit or debit card.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
  },
  {
    id: 2,
    name: "Mastercard",
    description: "Use your Mastercard for fast and safe payments.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
  },
  {
    id: 3,
    name: "PayPal",
    description: "Checkout quickly using your PayPal account.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
  },
  {
    id: 4,
    name: "American Express",
    description: "Use your Amex card for premium payment options.",
    logo: amexLogo,
  },
  {
    id: 5,
    name: "Google Pay",
    description: "Pay easily via Google Pay on supported devices.",
    logo: "https://pay.google.com/about/static_kcs/images/logos/google-pay-logo.svg",
  },
  {
    id: 6,
    name: "Apple Pay",
    description: "Use Apple Pay for quick and secure mobile payments.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 7,
    name: "Stripe",
    description: "Accept payments via Stripe’s global platform.",
    logo: strLogo,
  },
];

export default function PaymentMethodsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,   // Show 3 cards at once
    slidesToScroll: 1, // Scroll one card at a time
    arrows: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Choose Your Payment Method
      </h2>

      <Slider {...settings}>
        {paymentMethods.map((method) => (
          <div key={method.id} className="px-3">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col items-center p-6">
              <img
                src={method.logo}
                alt={method.name}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{method.name}</h3>
              <p className="text-center text-gray-600 mt-2">{method.description}</p>
              <button className="mt-6 w-full bg-blue-700 text-white py-2 rounded hover:bg-white hover:text-blue-700 border border-blue-700 transition">
                Use {method.name}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
