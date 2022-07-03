import React from 'react'

function TopButtons({ setQuery }) {
    const cities = [
      {
        id: 1,
        title: "Bengaluru",
      },
      {
        id: 2,
        title: "Bhubaneswar",
      },
      {
        id: 3,
        title: "Delhi",
      },
      {
        id: 4,
        title: "Jaipur",
      },
      {
        id: 5,
        title: "Karnataka",
      },
      {
        id: 6,
        title: "Mumbai",
      },
      {
        id: 7,
        title: "Pune",
      },
    ];
  
    return (
      <div className="flex items-center justify-between my-6">
        {cities.map((city) => (
          <button
            key={city.id}
            className="text-white text-lg font-medium"
            onClick={() => setQuery({ q: city.title })}
          >
            {city.title}
          </button>
        ))}
      </div>
    );
  }

export default TopButtons