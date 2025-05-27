import { useParams, Link } from "react-router-dom";
import React from "react";

const projects = {
  auctionplace: {
    title: "Auction Place",
    description: "Detailed auction platform description.",
    live: "https://auctionplacehere.netlify.app",
    github: "https://github.com/angelina-lapin/exam-winter2024",
  },
  ecomstore: {
    title: "Ecomstore",
    description: "Modern React e-commerce store.",
    live: "https://ecomstor.netlify.app",
    github: "https://github.com/angelina-lapin/react-assignment",
  },
  holidaze: {
    title: "Holidaze",
    description: "Venue booking platform with manager dashboard.",
    live: "https://holidazen.netlify.app",
    github: "https://github.com/angelina-lapin/holidaze",
  },
};

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return <div className="p-6 text-center">Project not found.</div>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="mb-4">{project.description}</p>
      <div className="flex gap-4 mb-4">
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="text-accent underline"
        >
          Live Site
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-accent underline"
        >
          GitHub Repo
        </a>
      </div>
      <Link to="/" className="text-primary underline">
        ← Back to Home
      </Link>
    </div>
  );
}
