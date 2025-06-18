import React from 'react';
import aboutus from "../assets/images/AboutUs.jpg"

const AboutUs = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            PV Enterprises - One Stop Solutions for Electrical, Plumbing and Sanitary needs.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="mt-10 space-y-8">
          {/* Introduction Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600">
                PV Enterprises is your trusted partner for comprehensive electrical, plumbing, and sanitary services. With years of expertise and dedication to excellence, we bring reliable solutions to both residential and commercial clients.
              </p>
              <p className="mt-4 text-gray-600">
                Our mission is to deliver premium quality services that meet the highest standards of safety, efficiency, and customer satisfaction — all under one roof.
              </p>
              <p className="mt-4 text-gray-600">
                Located conveniently near Francis Alukkas Jewellery, Ram Mohan Road, Chinthavalapp, Kozhikode - 04, we are just a call away from resolving your home or business utility needs.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={aboutus} 
                alt="PV Enterprises Services"
                className="w-full h-64 object-contain"
              />
            </div>
          </div>

          {/* Services Overview */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Our Service Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Electrical Services */}
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-lg font-semibold text-gray-900 text-center mb-2">
                  Electrical Services
                </h4>
                <p className="text-gray-600 text-center">
                  Expert wiring, lighting installation, maintenance, and upgrades for residential and commercial projects.
                </p>
              </div>

              {/* Plumbing Services */}
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-lg font-semibold text-gray-900 text-center mb-2">
                  Plumbing Services
                </h4>
                <p className="text-gray-600 text-center">
                  From leak repairs to complete system installations, we ensure reliable and clean water flow for your property.
                </p>
              </div>

              {/* Sanitary Solutions */}
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-lg font-semibold text-gray-900 text-center mb-2">
                  Sanitary Solutions
                </h4>
                <p className="text-gray-600 text-center">
                  Hygienic and high-standard sanitary fittings and repairs, keeping your spaces safe and modern.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            Reach us at: <strong>+91 9387338100, 940022486</strong>
          </p>
          <p className="text-lg text-gray-600 mt-2">
            Location: Near Francis Alukkas Jewellery, Ram Mohan Road, Chinthavalapp, Kozhikode - 04
          </p>
          <p className="mt-6 text-2xl font-bold text-gray-900">
            PV Enterprises – Reliable Solutions, Exceptional Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
