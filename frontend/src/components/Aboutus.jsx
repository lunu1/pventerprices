import React from 'react';
import aboutus from "../assets/images/AboutUs.jpg";

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
            PV Enterprises – Your Trusted Partner for Quality Trading Solutions.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="mt-10 space-y-8">
          {/* Introduction Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600">
                PV Enterprises is a leading name in trading, offering a wide range of high-quality products sourced from reliable manufacturers and suppliers. We specialize in delivering excellence across multiple categories to meet the diverse needs of our customers.
              </p>
              <p className="mt-4 text-gray-600">
                Our mission is to provide competitive pricing, uncompromised quality, and exceptional customer satisfaction, making us the preferred choice for businesses and individuals alike.
              </p>
              <p className="mt-4 text-gray-600">
                Conveniently located near Francis Alukkas Jewellery, Ram Mohan Road, Chinthavalapp, Kozhikode - 04, we ensure seamless trading solutions that you can trust.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={aboutus} 
                alt="PV Enterprises Trading"
                className="w-full h-64 object-contain"
              />
            </div>
          </div>

          {/* Product Categories */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Our Product Categories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Electrical Products */}
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-lg font-semibold text-gray-900 text-center mb-2">
                  Electrical Products
                </h4>
                <p className="text-gray-600 text-center">
                  High-quality cables, switches, lighting, and accessories sourced from trusted brands for residential and commercial needs.
                </p>
              </div>

              {/* Plumbing Products */}
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-lg font-semibold text-gray-900 text-center mb-2">
                  Plumbing Products
                </h4>
                <p className="text-gray-600 text-center">
                  Durable pipes, fittings, and plumbing essentials designed to ensure smooth water systems for every project.
                </p>
              </div>

              {/* Sanitary & Bathroom Solutions */}
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-lg font-semibold text-gray-900 text-center mb-2">
                  Sanitary & Bathroom Solutions
                </h4>
                <p className="text-gray-600 text-center">
                  Modern sanitary ware and accessories combining style, hygiene, and durability for premium spaces.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            Contact us at: <strong>+91 9387338100, 940022486</strong>
          </p>
          <p className="text-lg text-gray-600 mt-2">
            Location: Near Francis Alukkas Jewellery, Ram Mohan Road, Chinthavalapp, Kozhikode - 04
          </p>
          <p className="mt-6 text-2xl font-bold text-gray-900">
            PV Enterprises – Reliable Products, Trusted Trading.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
