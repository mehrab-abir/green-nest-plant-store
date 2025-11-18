import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router";

// Import hero images
import hero1 from "../assets/images/hero-img/hero-img (1).jpg";
import hero2 from "../assets/images/hero-img/hero-img (2).jpg";
import hero3 from "../assets/images/hero-img/hero-img (3).jpg";
import hero4 from "../assets/images/hero-img/hero-img (4).jpg";
import hero5 from "../assets/images/hero-img/hero-img (5).jpg";
import hero6 from "../assets/images/hero-img/hero-img (6).jpg";

const slideContent = [
  {
    id: 1,
    title: "Welcome to GreenNest",
    subtitle: "Nurture Your Space With Beautiful Indoor Plants",
    image: hero1,
  },
  {
    id: 2,
    title: "Live in Green Harmony",
    subtitle: "Bring home freshness with our curated plants",
    image: hero2,
  },
  {
    id: 3,
    title: "Nature Meets Home",
    subtitle: "Elevate your room with air-purifying greens",
    image: hero3,
  },
  {
    id: 4,
    title: "Boost Your Mood",
    subtitle: "Discover the mental benefits of greenery",
    image: hero4,
  },
  {
    id: 5,
    title: "The Perfect Gift",
    subtitle: "Plants that show you care — any time of year",
    image: hero5,
  },
  {
    id: 6,
    title: "Green Decor Ideas",
    subtitle: "Stylish, sustainable, and surprisingly simple",
    image: hero6,
  },
];

const Hero = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      speed={1500}
      pagination={{ clickable: true }}
      className="relative w-full h-[50vh] md:h-[85vh]"
    >
      {slideContent.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/10" />
            <div className="absolute top-10 md:top-32 left-6 md:left-14 flex flex-col space-y-4">
              <p className="text-lg md:text-xl font-bold text-white">
                {slide.title}
              </p>
              <h1 className="text-xl md:text-5xl font-bold text-white leading-tight">
                {slide.subtitle}
              </h1>
              <Link
                to="/plants"
                className="btn bg-green-600 text-white w-fit hover:scale-95 transition mt-2 shadow-none border-none"
              >
                Explore Plants
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;