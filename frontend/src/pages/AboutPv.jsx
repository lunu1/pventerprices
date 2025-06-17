import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Droplet, 
  Zap, 
  Shield, 
  Award, 
  CheckCircle
} from 'lucide-react';

const AboutPVAnterices = () => {
  const services = [
    {
      icon: <Droplet className="w-5 h-5" />,
      title: "Sanitary Store",
      description: "Premium bathroom fixtures & accessories"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Electrical Solutions",
      description: "Complete electrical installations & repairs"
    },
    {
      icon: <Wrench className="w-5 h-5" />,
      title: "Plumbing Services",
      description: "Expert plumbing for homes & businesses"
    }
  ];

  const features = [
    "25+ Years Experience",
    "Licensed Professionals",
    "24/7 Emergency Service",
    "Quality Guaranteed"
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-black mb-4">
            About <span className="border-b-4 border-black">PV Anterices</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for sanitary, electrical, and plumbing solutions
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden border-4 border-black">
              <img
                src="https://www.capitaltrading.co/wp-content/uploads/2022/07/ZZH_T23447A01_000_01-1024x768.jpg"
                alt="PV Anterices Store"
                className="w-full h-96 object-cover filter  hover:grayscale transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white p-4">
                <h3 className="text-xl font-bold">Modern Facilities</h3>
                <p className="text-sm">Professional showroom & service center</p>
              </div>
            </div>
            
            {/* Stats Badge */}
            <div className="absolute -top-4 -right-4 bg-black text-white p-4 border-4 border-white shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">ISO</div>
                <div className="text-xs">Certified</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold text-black mb-4">
                Excellence Since 1998
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PV Anterices has been Kerala's leading provider of comprehensive 
                sanitary, electrical, and plumbing solutions for over 25 years.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We combine decades of experience with modern technology to deliver 
                unmatched quality and reliability in every project.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-3">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3 p-3 border-2 border-gray-200 hover:border-black transition-colors duration-300"
                >
                  <div className="bg-black text-white p-2">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-black text-white p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-6">
            Why Choose Us?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="flex items-center space-x-2 p-3 border border-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center"
        >
          <div className="border-4 border-black p-6">
            <div className="text-3xl font-bold text-black">5000+</div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>
          <div className="border-4 border-black p-6">
            <div className="text-3xl font-bold text-black">25+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="border-4 border-black p-6">
            <div className="text-3xl font-bold text-black">50+</div>
            <div className="text-sm text-gray-600">Expert Technicians</div>
          </div>
          <div className="border-4 border-black p-6">
            <div className="text-3xl font-bold text-black">24/7</div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPVAnterices;