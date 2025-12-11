import React from "react";
import { Link } from "react-router";

const WinterCareTips = [
  {
    id: 1,
    name: "Saves Homeless Pets",
    discription:
      "Your adoption gives a stranded pet a safe place to call home.",
    icon: "🧣",
  },
  {
    id: 2,
    name: "Reduces Overbreeding",
    discription:
      "Buying encourages harmful mass breeding. Adoption helps stop it.",
    icon: "🍲",
  },
  {
    id: 3,
    name: " Loyal & Loving Friends",
    discription:
      "Rescued pets know you saved them — their love lasts a lifetime.",
    icon: "🐾",
  },
];

const WinterTips = () => {
  return (
    <>
      <div className="container mx-auto bg-green-50 py-16 px-4">
        <div class="max-w-6xl mx-auto text-center">
          <h2 class="contentTitle">Why Adopt from PawMart?</h2>

          <p class="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Every year, innocent pets are abandoned and left without care.
            PawMart believes every animal deserves a second chance. When you
            choose adoption over buying, you’re not just choosing a pet —
            <span class="text-accent font-semibold">you’re saving a life.</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
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
          <div class="mx-auto text-center my-10">
            <Link
              to={"/add-service"}
              class="btn btn-secondary  hover:bg-white hover:text-secondary"
            >
              Adopt Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WinterTips;
