'use client';

import { FC, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

interface SlideData {
    id: number;
    bgImage: string;
    tagline: string;
    title: string;
    highlightedText?: string;
    description: string;
    exploreText: string;
    speakText: string;
    exploreLink: string;
    speakLink: string;
    platformTitle?: string;
    platformDescription: string;
}

const slides: SlideData[] = [
    {
        id: 1,
        bgImage: '/carousel1.png',
        tagline: "Connecting Capital to Africa's Real Assets",
        title: "ACCESS TO AFRICA'S REAL OPPORTUNITIES",
        highlightedText: "AFRICA'S REAL",
        description: "LXXI is a structured brokerage platform connecting investors to real estate, private markets, infrastructure, and strategic opportunities across Africa.",
        exploreText: "Explore Our Sectors",
        speakText: "Speak With Us",
        exploreLink: "/sectors",
        speakLink: "/contact",
        platformTitle: "Our platform",
        platformDescription: "Institutional-grade access to Africa's most compelling alternative investment opportunities"
    },
    {
        id: 2,
        bgImage: '/carousel2.png',
        tagline: "Connecting Capital to Africa's Real Assets",
        title: "ACCESS TO AFRICA'S REAL OPPORTUNITIES",
        highlightedText: "AFRICA'S REAL",
        description: "LXXI is a structured brokerage platform connecting investors to real estate, private markets, infrastructure, and strategic opportunities across Africa.",
        exploreText: "Explore Our Sectors",
        speakText: "Speak With Us",
        exploreLink: "/sectors",
        speakLink: "/contact",
        platformTitle: "Our platform",
        platformDescription: "Institutional-grade access to Africa's most compelling alternative investment opportunities"
    },
    {
        id: 3,
        bgImage: '/carousel3.png',
        tagline: "Connecting Capital to Africa's Real Assets",
        title: "ACCESS TO AFRICA'S REAL OPPORTUNITIES",
        highlightedText: "AFRICA'S REAL",
        description: "LXXI is a structured brokerage platform connecting investors to real estate, private markets, infrastructure, and strategic opportunities across Africa.",
        exploreText: "Explore Our Sectors",
        speakText: "Speak With Us",
        exploreLink: "/sectors",
        speakLink: "/contact",
        platformTitle: "Our platform",
        platformDescription: "Institutional-grade access to Africa's most compelling alternative investment opportunities"
    },
];

const HeroCarousel: FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
        });
    }, []);

    return (
        <div className="relative w-full h-[90vh]">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                speed={800}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination-custom',
                }}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                loop={true}
                className="h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative h-full py-20">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <Image
                                src={slide.bgImage}
                                alt="Africa Investment Opportunity"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40" />
                        </div>

                        {/* Content Container */}
                        <div className="relative h-full flex items-center py-10">
                            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                                <div className="grid lg:grid-cols-12 gap-12 items-center">
                                    {/* Left Content */}
                                    <div className="lg:col-span-7 space-y-8 mt-20" data-aos="fade-up">
                                        <div className="inline-block">
                                            <span className="text-amber-400 text-sm tracking-[3px] uppercase font-medium">
                                                {slide.tagline}
                                            </span>
                                        </div>

                                        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
                                            ACCESS TO <br />
                                            <span className="font-playfair italic text-[#E5B63E]">{slide.highlightedText}</span><br />
                                            OPPORTUNITIES
                                        </h1>

                                        <p className="max-w-xl text-lg text-gray-200 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                                            {slide.description}
                                        </p>

                                        {/* Buttons */}
                                        <div className="flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="400">
                                            <a
                                                href={slide.exploreLink}
                                                className="inline-block bg-amber-400 hover:bg-amber-500 transition-colors text-black font-semibold px-10 py-4 rounded-full text-lg"
                                            >
                                                {slide.exploreText}
                                            </a>
                                            <a
                                                href={slide.speakLink}
                                                className="inline-block border border-white/70 hover:bg-white/10 transition-colors text-white font-medium px-10 py-4 rounded-full text-lg backdrop-blur-sm"
                                            >
                                                {slide.speakText}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Right Platform Panel */}
                                    <div className="lg:col-span-5 hidden lg:block" data-aos="fade-left" data-aos-delay="300">
                                        <div className="bg-amber-300 text-black p-10 rounded-2xl shadow-2xl">
                                            {slide.platformTitle && (
                                                <p className="uppercase tracking-widest text-sm mb-3 font-medium">
                                                    {slide.platformTitle}
                                                </p>
                                            )}
                                            <p className="text-2xl leading-tight font-semibold">
                                                {slide.platformDescription}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom navigation dots */}
                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                            <div className="swiper-pagination-custom flex gap-3" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            <button className="swiper-button-prev-custom absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all">
                ←
            </button>
            <button className="swiper-button-next-custom absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all">
                →
            </button>

            {/* Pagination Container */}
            <div className="swiper-pagination-custom absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30" />
        </div>
    );
};

export default HeroCarousel;