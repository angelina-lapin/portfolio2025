import { Link } from "react-router-dom";
import React from "react";

const projects = [
  {
    id: "auctionplace",
    title: "Auction Place",
    shortDesc: "Auction platform.",
    image: "/auction.jpg",
  },
  {
    id: "ecomstore",
    title: "Ecomstore",
    shortDesc: "React e-commerce store.",
    image: "/ecom.jpg",
  },
  {
    id: "holidaze",
    title: "Holidaze",
    shortDesc: "Venue booking platform.",
    image: "/holidaze.jpg",
  },
];

export default function Home() {
  return (
    <div className="grid md:grid-cols-3 gap-6 p-6">
      {projects.map((proj) => (
        <Link
          key={proj.id}
          to={`/project/${proj.id}`}
          className="bg-white rounded-xl shadow-lg p-4 hover:scale-105 transition"
        >
          <img
            src={proj.image}
            alt={proj.title}
            className="w-full h-40 object-cover rounded"
          />
          <h2 className="text-xl font-bold mt-2 text-dark">{proj.title}</h2>
          <p className="text-sm text-gray-600">{proj.shortDesc}</p>
        </Link>
      ))}
    </div>
  );
}
