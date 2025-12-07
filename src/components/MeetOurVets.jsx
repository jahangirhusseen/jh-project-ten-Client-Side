import React from "react";

const vets = [
  {
    id: 1,
    name: "Dr. Emily Carter",
    specialty: "Veterinary Surgeon",
    experience: "12 Years",
    image: "https://i.postimg.cc/MptNg9jc/pexels-kampus-7928132.jpg",
  },
  {
    id: 2,
    name: "Dr. Michael Thompson",
    specialty: "Pet Nutrition Specialist",
    experience: "10 Years",
    image: "https://i.postimg.cc/FKR8v0jd/pexels-mikhail-nilov-7465698.jpg",
  },
  {
    id: 3,
    name: "Dr. Sarah Bennett",
    specialty: "Pet Behavior Expert",
    experience: "8 Years",
    image:
      "https://i.postimg.cc/5t0TJ8wv/pexels-tima-miroshnichenko-6235652.jpg",
  },
];

const MeetOurVets = () => {
  return (
    <div className="container mx-auto px-2 mb-12">
      <h2 className="text-3xl font-semibold text-center pb-10 ">
        Meet Our Expert Vets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vets.map((vet) => (
          <div
            key={vet.id}
            className="card bg-base-200 shadow-xl border border-base-300 relative transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg"
          >
            <figure className="h-80">
              <img
                src={vet.image}
                alt={vet.name}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-lg font-semibold">{vet.name}</h3>
              <p className="text-sm text-gray-600">{vet.specialty}</p>
              <p className="text-sm">Experience: {vet.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurVets;
