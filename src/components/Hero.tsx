// components/Hero.tsx
"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    title: "Empowering Africa Through",
    highlight: "Strategic Investments And Partnerships",
    subtitle:
      "LXII is committed to creating robust investment solutions tailored for the African landscape.",
    bgImage:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=2070",
  },
  {
    title: "Building Tomorrow's Africa",
    highlight: "Through Strategic Capital & Innovation",
    subtitle:
      "Partner with us to unlock opportunities across high-growth sectors in Africa's dynamic economy.",
    bgImage:
      "https://images.unsplash.com/photo-1581092160560-1c1e428e9d65?auto=format&fit=crop&q=80&w=2070",
  },
  {
    title: "Invest in Africa's Future",
    highlight: "Create Lasting Wealth & Impact",
    subtitle:
      "Strategic investments that drive sustainable growth and shared prosperity across the continent.",
    bgImage:
      "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80&w=2070",
  },
];

export default function Hero() {
  useEffect(() => {
    // Make sure AOS is refreshed after Swiper mounts
    if (typeof window !== "undefined" && window.Aos) {
      window.Aos.refresh();
    }
  }, []);

  return (
    <section className="relative min-h-screen">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-custom-bullet",
          bulletActiveClass: "swiper-custom-bullet-active",
        }}
        navigation={true}
        className="h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.bgImage}
                  alt="African cityscape"
                  fill
                  className="object-cover brightness-[0.35]"
                  priority={index === 0}
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAErgJ9aA9l9gAAAABJRU5ErkJggg=="
                />
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/60 to-black/80" />

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                  <div className="max-w-4xl">
                    <h1
                      className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      {slide.title}
                      <br />
                      <span className="text-yellow-400">{slide.highlight}</span>
                    </h1>

                    <p
                      className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      {slide.subtitle}
                    </p>

                    <div
                      className="flex flex-col sm:flex-row gap-5"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <a
                        href="#services"
                        className="inline-flex items-center justify-center px-10 py-5 bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg rounded-xl transition-colors shadow-lg shadow-yellow-500/20"
                      >
                        Explore Our Services
                      </a>
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-10 py-5 border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 font-bold text-lg rounded-xl transition-colors"
                      >
                        Partner With Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination bullets styling */}
      <style jsx global>{`
        .swiper-custom-bullet {
          width: 14px;
          height: 14px;
          background: rgba(255, 255, 255, 0.4);
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .swiper-custom-bullet-active {
          background: #fbbf24;
          transform: scale(1.3);
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: rgba(255, 255, 255, 0.7) !important;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: #fbbf24 !important;
        }
      `}</style>
    </section>
  );
}
