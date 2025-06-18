import React from 'react';
import LocationOnIcon from "@mui/icons-material/LocationOn";


const ContactUs = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Reach out to PV Enterprises – Your One Stop Solution for Electrical, Plumbing, and Sanitary needs.
          </p>
        </div>

        {/* Contact Details Section */}
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {/* Phone */}
          <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 text-center w-full sm:w-1/2 lg:w-1/4">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mt-4">Phone</h4>
            <p className="mt-2 text-gray-600">+91 93873 38100</p>
            <p className="text-gray-600">+91 94002 24860</p>
          </div>

          {/* Location */}
          <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 text-center w-full sm:w-1/2 lg:w-1/4">
            <div className="flex justify-center">
                          <LocationOnIcon sx={{ color: "blue" }} />

            </div>
            <h4 className="text-lg font-semibold text-gray-900 mt-4">Address</h4>
            <p className="mt-2 text-gray-600">Near Francis Alukkas Jewellery,</p>
            <p className="text-gray-600">Ram Mohan Road, Chinthavalapp,</p>
            <p className="text-gray-600">Kozhikode - 04</p>
          </div>

          {/* Business Identity */}
          <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 text-center w-full sm:w-1/2 lg:w-1/4">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17v-2a4 4 0 018 0v2m-4-6a4 4 0 11-8 0 4 4 0 018 0zm4 6h2a2 2 0 012 2v2H5v-2a2 2 0 012-2h2"
                />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mt-4">Company</h4>
            <p className="mt-2 text-gray-600">PV Enterprises</p>
            <p className="text-gray-600">One Stop for Electrical, Plumbing, and Sanitary Solutions</p>
          </div>
        </div>

        {/* Closing Section */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            We’re here to support all your home and business infrastructure needs with premium quality and service.
          </p>
          <p className="mt-6 text-2xl font-bold text-gray-900">
            PV Enterprises – Built for Reliability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
