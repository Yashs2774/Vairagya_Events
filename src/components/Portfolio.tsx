import React from 'react';

const projects = [
  {
    title: "Bhoyni - Shankeshwar Charipalit Sangh",
    image: "mal.mp4",
    description: "Embark on a Spiritual Journey with Shri Palit Sangh Yatra – Preserving Faith and Tradition Through Devotion."
  },
  {
    title: "Mahavir Jayanti Festival",
    image: "https://images.unsplash.com/photo-1465310477141-6fb93167a273",
    description: "Coordinated city-wide celebrations with multiple temples"
  },
  {
    title: "Youth Dharma Conference",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
    description: "Modern approach to engaging young Jains with their heritage"
  }
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-gray-50" id="portfolio">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Recent Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}