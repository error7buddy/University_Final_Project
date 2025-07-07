import React, { useState, useRef, useEffect } from "react";

export default function Section2() {
  const data = [
    ["Dhaka", "Biriyani", "Star Kabab"],
    ["Chittagong", "Hilsa Fish Curry", "Sultan's Dine"],
    ["Sylhet", "Shatkora Beef", "Pizza Hut Bangladesh"],
    ["Khulna", "Panta Ilish", "KFC Bangladesh"],
    ["Rajshahi", "Mango-based Dishes", "BFC (Bangladesh Fried Chicken)"],
    ["Barisal", "Kachki Fish", "Takeout"],
    ["Rangpur", "Misti Doi", "North End Coffee"],
    ["Mymensingh", "Borhani", "Coffee World"],
    ["Comilla", "Rasmalai", "Madchef"],
    ["Narayanganj", "Chomchom", "Burger King Bangladesh"],
  ];

  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  // Calculate maxHeight dynamically when toggling
  useEffect(() => {
    if (containerRef.current) {
      if (showAll) {
        // full scroll height for all rows
        setMaxHeight(containerRef.current.scrollHeight + "px");
      } else {
        // approx height for 4 rows (adjust based on your row height)
        const rowHeight = containerRef.current.scrollHeight / data.length;
        setMaxHeight(rowHeight * 4 + "px");
      }
    }
  }, [showAll, data.length]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="w-4/5 bg-white rounded-2xl shadow-xl p-8 font-sans border border-gray-200">
        <h1 style={{fontFamily:'Luckiest Guy, cursive'}} className="text-3xl font-bold text-center mb-6  text-red-500" >
          Explore Neighborhood Favorites
        </h1>
        <p style={{fontFamily:'Luckiest Guy, cursive'}} className="text-center text-gray-500 mb-8">
          Get more from your neighborhood in Bangladesh
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm table-fixed border-collapse">
            <thead>
              <tr className="border-b border-gray-300 bg-gray-50">
                <th className="px-4 py-3 font-semibold text-left" style={{ width: "33.33%" }}>
                  Top Cities
                </th>
                <th className="px-4 py-3 font-semibold text-center" style={{ width: "33.33%" }}>
                  Top Cuisines
                </th>
                <th className="px-4 py-3 font-semibold text-right" style={{ width: "33.33%" }}>
                  Top Restaurant Chains
                </th>
              </tr>
            </thead>
          </table>
          {/* Animated tbody container */}
          <div
            ref={containerRef}
            style={{
              maxHeight: maxHeight,
              overflow: "hidden",
              transition: "max-height 0.6s ease",
            }}
          >
            <table className="w-full text-sm table-fixed border-collapse">
              <tbody>
                {data.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-3 text-left" style={{ width: "33.33%" }}>
                      {row[0]}
                    </td>
                    <td className="px-4 py-3 text-center" style={{ width: "33.33%" }}>
                      {row[1]}
                    </td>
                    <td className="px-4 py-3 text-right" style={{ width: "33.33%" }}>
                      {row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-6">
          <button 
            className="text-blue-600 font-semibold hover:underline focus:outline-none flex items-center justify-center mx-auto gap-2"
            onClick={() => setShowAll(!showAll)}
            aria-label={showAll ? "See less" : "See more"}
          >
            {showAll ? "See less" : "See more"}
            <span>{showAll ? "▲" : "▼"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
