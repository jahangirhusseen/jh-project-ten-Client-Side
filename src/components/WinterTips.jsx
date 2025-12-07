import React from "react";

const WinterCareTips = [
  {
    id: 1,
    name: "Keep Them Warm",
    discription:
      "Provide warm bedding and limit outdoor exposure during cold weather.",
    icon: "🧣",
  },
  {
    id: 2,
    name: "Proper Nutrition & Hydration",
    discription:
      "Offer nutrient-rich food and ensure water does not freeze in winter.",
    icon: "🍲",
  },
  {
    id: 3,
    name: "Paw & Skin Protection",
    discription:
      "Clean paws after walks and use moisturizers to prevent cracking.",
    icon: "🐾",
  },
  {
    id: 4,
    name: "Limit Bathing",
    discription:
      "Reduce frequent baths to avoid dry skin; use warm water and pet-safe shampoo.",
    icon: "🛁",
  },
];

const WinterTips = () => {
  return (
    <>
      <div className="container mx-auto px-2 mb-12">
        <h2 className="text-3xl font-semibold text-center pb-10 ">
          Winter Care Tips for Pets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {WinterCareTips.map((data) => (
            <div
              key={data.id}
              className="card bg-base-100  shadow-xl border border-base-400 hover:shadow-md sm:hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="card-body">
                <span className="text-4xl mb-4">{data.icon}</span>
                <h3 className="card-title text-lg font-semibold">
                  {data.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {data.discription} {data.discription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WinterTips;
