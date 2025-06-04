"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Make the Planet Greener with Recycling
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Join our mission to reduce waste and conserve natural resources. Start recycling today for a sustainable tomorrow.
          </p>
          <Link href="/auth/register">
            <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-200 transition">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-10">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold text-green-500 mb-4">Easy Recycling</h3>
              <p className="text-gray-700">
                Simplify the recycling process with our tools and resources designed to make waste management easy for everyone.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold text-green-500 mb-4">Eco-Friendly Events</h3>
              <p className="text-gray-700">
                Participate in community-driven events that promote sustainability and green living.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold text-green-500 mb-4">Impact Tracking</h3>
              <p className="text-gray-700">
                See the difference you make through detailed insights into your recycling impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-10">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-4xl font-bold text-green-500">1,000+</h3>
              <p className="text-gray-700">Tons of Waste Recycled</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-green-500">500+</h3>
              <p className="text-gray-700">Eco-Friendly Events Organized</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-green-500">100+</h3>
              <p className="text-gray-700">Communities Impacted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-10">
            What People Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <p className="text-gray-700 italic mb-4">
                "RecycleX has transformed how our community thinks about recycling. It's a game-changer!"
              </p>
              <p className="text-sm text-gray-500">- Jane Doe</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <p className="text-gray-700 italic mb-4">
                "The impact tracking feature motivates me to recycle more. I love seeing the difference I’m making!"
              </p>
              <p className="text-sm text-gray-500">- John Smith</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <p className="text-gray-700 italic mb-4">
                "The team at RecycleX is doing incredible work. Their events are both educational and fun!"
              </p>
              <p className="text-sm text-gray-500">- Sarah Lee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg mb-8">
            Start recycling with us today and be a part of the solution for a greener tomorrow.
          </p>
          <Link href="/auth/register">
            <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-200 transition">
              Join Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
