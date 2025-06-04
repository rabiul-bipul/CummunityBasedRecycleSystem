"use client";

export default function EventsPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-8">
          Events
        </h1>

        {/* Ongoing Events */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-green-500 mb-4">
            Ongoing Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-lg font-bold mb-2">Recycling Workshop</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Join us for a hands-on workshop to learn effective recycling
                  practices.
                </p>
                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-green-500 mb-4">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-lg font-bold mb-2">Eco Fair 2023</h3>
                <p className="text-gray-700 text-sm mb-4">
                  A community-driven event to explore green technologies and
                  sustainable practices.
                </p>
                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-green-500 mb-4">
            Achievements
          </h2>
          <div className="flex overflow-x-scroll space-x-4 py-4">
            {Array.from({ length: 5 }).map((_, idx) => (
              <div
                key={idx}
                className="flex-none w-64 bg-white p-4 shadow-lg rounded-lg"
              >
                <h3 className="text-lg font-bold mb-2">Achievement Title</h3>
                <p className="text-gray-700 text-sm">
                  Description of a milestone achieved during an event.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Hall of Fame */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-green-500 mb-4">
            Hall of Fame
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg"
              >
                <div className="w-24 h-24 rounded-full bg-green-200 mb-4"></div>
                <h3 className="text-lg font-bold">John Doe</h3>
                <p className="text-sm text-gray-500">Top Recycler</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews & Testimonials */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-green-500 mb-4">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-200 mb-4"></div>
                <p className="text-gray-700 text-sm text-center">
                  "This event changed the way I think about recycling. Truly
                  inspiring!"
                </p>
                <p className="text-sm text-gray-500 mt-2">- Jane Doe</p>
              </div>
            ))}
          </div>
        </section>

        {/* Environmental Impacts */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-green-500 mb-4">
            Impacts on the Environment
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-lg font-bold mb-2">Waste Reduced</h3>
              <p className="text-gray-700 text-sm">
                Over 1,000 tons of waste have been diverted from landfills.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-lg font-bold mb-2">Energy Saved</h3>
              <p className="text-gray-700 text-sm">
                Recycling initiatives have saved 5,000 kWh of energy.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-lg font-bold mb-2">Green Partnerships</h3>
              <p className="text-gray-700 text-sm">
                Partnered with 20 organizations to promote sustainable living.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
