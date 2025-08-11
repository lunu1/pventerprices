import React from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  Droplet, 
  Zap, 
  ShoppingCart, 
  Award, 
  CheckCircle
} from 'lucide-react';

const AboutPVEnterprises = () => {
  const categories = [
     {
      icon: <Zap className="w-5 h-5" />,
      title: "Electrical Products",
      description: "Wiring, Switches, lighting solutions & branded electricals"
    },
    {
      icon: <Droplet className="w-5 h-5" />,
      title: "Sanitary Products",
      description: "Premium bathroom fittings, pipes & accessories"
    },
   
    {
      icon: <Package className="w-5 h-5" />,
      title: "Plumbing Essentials",
      description: "Pipes, valves & plumbing hardware for all needs"
    }
  ];

  const features = [
    "17+ Years in Trading",
    "Top Branded Products",
    "Wide Range of Stock",
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
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            About <span className="border-b-4 border-red-600">PV Enterprises</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted trading partner for Electrical, sanitary and plumbing products
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
            <div className="relative overflow-hidden border-4 border-red-600">
              <img
                src="https://www.capitaltrading.co/wp-content/uploads/2022/07/ZZH_T23447A01_000_01-1024x768.jpg"
                alt="PV Enterprises Trading Store"
                className="w-full h-96 object-cover filter hover:grayscale transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-red-600 bg-opacity-80 text-white p-4">
                <h3 className="text-xl font-bold">Extensive Showroom</h3>
                <p className="text-sm">Wide range of premium products in stock</p>
              </div>
            </div>
            
            {/* Badge */}
            <div className="absolute -top-4 -right-4 bg-red-600 text-white p-4 border-4 border-white shadow-lg">
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
              <h2 className="text-3xl font-bold text-red-600 mb-4">
                Excellence Since 2008
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PV Enterprises has been Kerala's leading supplier of sanitary, electrical, 
                and plumbing products for over 17 years.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We partner with top brands to provide premium quality products that meet 
                the needs of homes, businesses, and large-scale projects.
              </p>
            </div>

            {/* Product Categories */}
            <div className="space-y-3">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3 p-3 border-2 border-gray-200 hover:border-red-600 transition-colors duration-300"
                >
                  <div className="bg-red-600 text-white p-2">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-600">{category.title}</h3>
                    <p className="text-sm text-gray-600">{category.description}</p>
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
          className="bg-red-600 text-white p-8 mb-12 rounded-2xl"
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
                className="flex items-center space-x-2 p-3 border border-white hover:bg-white hover:text-red-600 transition-colors duration-300"
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
          <div className="border-4 border-red-600 p-6">
            <div className="text-3xl font-bold text-red-600">100+</div>
            <div className="text-sm text-gray-600">Trusted Clients</div>
          </div>
          <div className="border-4 border-red-600 p-6">
            <div className="text-3xl font-bold text-red-600">17+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="border-4 border-red-600 p-6">
            <div className="text-3xl font-bold text-red-600">500+</div>
            <div className="text-sm text-gray-600">Product Range</div>
          </div>
          <div className="border-4 border-red-600 p-6">
            <div className="text-3xl font-bold text-red-600">Top Brands</div>
            <div className="text-sm text-gray-600">Guaranteed Quality</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPVEnterprises;
