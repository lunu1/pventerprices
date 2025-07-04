import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    id: 1,
    image: 'hero2.jpg',
    title: 'Luxury Redefined',
    subtitle: 'Experience premium comfort and elegance',
  },
  {
    id: 2,
    image: 'hero1.jpg',
    title: 'Drive Your Dream',
    subtitle: 'High-end performance cars for unforgettable moments',
  },
  {
    id: 3,
    image: 'hero3.jpg',
    title: 'Adventure Starts Here',
    subtitle: 'Book your exclusive ride today',
  },
];

const HeroSlider = () => {
  return (
    <div className="relative w-full h-[90vh]">
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
              className="w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black bg-opacity-50 text-white p-8 rounded-lg text-center max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg md:text-xl">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />
    </div>
  );
};

export default HeroSlider;
