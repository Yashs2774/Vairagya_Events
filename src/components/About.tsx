import React from 'react';

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase">About</h2>
          <h2 className="text-3xl font-bold text-orange-600">Vairagya Events</h2>
        </div>

        {/* Text Content */}
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            Vairagya Events is a trusted name in religious event management, based in Ahmedabad, Gujarat. With a deep passion for tradition and spirituality, we specialize in organizing meaningful and culturally rich religious ceremonies and events. Our unique approach blends devotion with precision, ensuring every event reflects the sanctity and aspirations of our clients. Backed by over 17 years of experience in managing and decorating religious events, Vairagya Events has set a benchmark in delivering exceptional, faith-centered experiences.
          </p>
        </div>

        {/* Button Section */}
        <div className="text-center mt-12">
          <a
            href="https://vairagyaevents.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors"
          >
            View More About Us →
          </a>
        </div>
      </div>
    </section>
  );
}
