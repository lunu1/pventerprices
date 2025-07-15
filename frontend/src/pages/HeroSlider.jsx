import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    id: 1,
    image: '/hero1.jpg',
    title: (
      <>
        Transform Your Bathroom <br /> with <span className="text-red-500">Luxury Sanitaryware</span>
      </>
    ),
    subtitle:
      'Experience premium fittings and fixtures that bring unmatched style, comfort, and durability to your spaces.'
  },
  {
    id: 2,
    image: '/hero2.jpg',
    title: (
      <>
        Power Your World with <br /> <span className="text-red-500">Top Electrical Brands</span>
      </>
    ),
    subtitle:
      'Delivering safe, reliable, and cutting-edge electrical solutions for homes, businesses, and industries.'
  },
  {
    id: 3,
    image: '/hero3.jpg',
    title: (
      <>
        Brighten Your Life with <br /> Premium <span className="text-red-500">Lighting Solutions</span>
      </>
    ),
    subtitle:
      'Illuminate every corner with designer lights that combine beauty, energy efficiency, and brilliance.'
  }
];

const HeroSlider = () => {
  return (
    <div className="relative w-full h-[95vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center px-4 max-w-4xl"
              >
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-snug drop-shadow-lg mb-6">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 mb-8">
                  {slide.subtitle}
                </p>
                {/* <div className="flex justify-center">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300">
                    Explore Now
                  </button>
                </div> */}
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Style */}
      <style jsx>{`
        .swiper-pagination-bullet {
          background: #fff;
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
          background: #ef4444; /* Tailwind Red */
          opacity: 1;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          font-size: 24px;
          transition: 0.3s;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: #ef4444;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
