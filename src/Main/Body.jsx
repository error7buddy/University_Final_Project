import React from 'react';

export default function Body() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <h1 style={{fontFamily:'Luckiest Guy, cursive'}} className="text-4xl font-extrabold text-center mb-10 bg-clip-text bg-gradient-to- text-red-500 drop-shadow-md">
  ❤️ Favorites
</h1>


      {/* Grid with 3 cards per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card Template */}
        {[
          {
            image: "../src/assets/why-is-mexican-food-spicy-1.jpg",
            title: "Mexican Spicy - Rambazar",
            type: "tbChinese",
            rating: "3.8 (100+)",
            price: "26 tk",
          },
          {
            image: "../src/assets/hotcofee.jpg",
            title: "Bites and Brew",
            type: "tbChinese",
            rating: "3.7 (45)",
            price: "29 tk",
          },
          {
            image: "/src/assets/image.png",
            title: "Aziz Canteen",
            type: "tbBengali",
            rating: "4.0 (100+)",
            price: "26 tk",
          },
           {
            image: "../src/assets/why-is-mexican-food-spicy-1.jpg",
            title: "Mexican Spicy - Rambazar",
            type: "tbChinese",
            rating: "3.8 (100+)",
            price: "26 tk",
          },
          {
            image: "../src/assets/hotcofee.jpg",
            title: "Bites and Brew",
            type: "tbChinese",
            rating: "3.7 (45)",
            price: "29 tk",
          },
          {
            image: "/src/assets/image.png",
            title: "Aziz Canteen",
            type: "tbBengali",
            rating: "4.0 (100+)",
            price: "26 tk",
          },
           {
            image: "../src/assets/why-is-mexican-food-spicy-1.jpg",
            title: "Mexican Spicy - Rambazar",
            type: "tbChinese",
            rating: "3.8 (100+)",
            price: "26 tk",
          },
          {
            image: "../src/assets/hotcofee.jpg",
            title: "Bites and Brew",
            type: "tbChinese",
            rating: "3.7 (45)",
            price: "29 tk",
          },
          {
            image: "/src/assets/image.png",
            title: "Aziz Canteen",
            type: "tbBengali",
            rating: "4.0 (100+)",
            price: "26 tk",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-br from-white via-red-50 to-red-100"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
                <p className="text-gray-600 text-sm">{item.type}</p>
              </div>
              <div className="text-right space-y-1">
                <p className="font-semibold text-gray-700">{item.rating}</p>
                <p className="text-gray-800 text-sm">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
