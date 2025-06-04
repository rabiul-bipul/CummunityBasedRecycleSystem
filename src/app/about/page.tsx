"use client";

export default function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Welcome to <span className="font-bold text-green-500">RecycleX</span>, your trusted partner in promoting sustainability through recycling. Our mission is to create a greener, cleaner planet by encouraging individuals and organizations to adopt responsible recycling practices. We believe that small changes in our habits can lead to significant environmental impact.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vision Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-500 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To inspire communities and businesses to embrace recycling as a way of life, paving the way for a future where waste is minimized and resources are conserved for generations to come.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-500 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To make recycling accessible, efficient, and impactful for everyone by providing education, resources, and technology that empower sustainable living.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-green-500 mb-4 text-center">Why Recycling Matters</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            Recycling helps reduce waste in landfills, conserves natural resources, and reduces greenhouse gas emissions. By recycling, we can collectively take a stand against environmental degradation and move towards a more sustainable future.
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-green-500 mb-4 text-center">Meet Our Team</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            At <span className="font-bold text-green-500">RecycleX</span>, we’re a passionate team of environmentalists, technologists, and change-makers dedicated to driving impactful solutions for a sustainable future.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-green-200"></div>
              <h3 className="text-lg font-semibold mt-4">John Doe</h3>
              <p className="text-sm text-gray-500">Founder & CEO</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-green-200"></div>
              <h3 className="text-lg font-semibold mt-4">Jane Smith</h3>
              <p className="text-sm text-gray-500">Head of Sustainability</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-green-200"></div>
              <h3 className="text-lg font-semibold mt-4">Michael Lee</h3>
              <p className="text-sm text-gray-500">Lead Developer</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold text-green-500 mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Start your recycling journey with us today. Together, we can create a positive impact on our environment and build a sustainable future.
          </p>
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
