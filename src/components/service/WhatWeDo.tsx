import React from 'react';
import { MapPin, Award, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
    {
        icon: MapPin,
        title: "Local Expertise",
        description: "Deep-rooted networks and on-the-ground intelligence across key African economic hubs ensure seamless execution in complex markets.",
    },
    {
        icon: Award,
        title: "Institutional Rigor",
        description: "Applying global standards of due diligence, compliance, and reporting to every transaction and managed asset.",
    },
    {
        icon: Zap,
        title: "Strategic Access",
        description: "Unparalleled access to off-market opportunities and primary infrastructure developments for discerning investors.",
    },
];

const coreServices = [
    {
        title: "Structured Brokerage",
        description: "Tailored transactional services designed for complex portfolios. We specialize in cross-border acquisitions, disposals, and structured financing for logistics, energy, and commercial real estate.",
        image: "/carousel2.png",
        link: "#",
    },
    {
        title: "Real Assets Management",
        description: "Strategic lifecycle management focused on long-term value creation. Our team oversees operational excellence, sustainability integration, and yield optimization for institutional holdings.",
        image: "/carousel3.png",
        link: "#",
    },
];

const WhatWeDo = () => {
    return (
        <div className="bg-white text-black">
            {/* Top Features */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div
                                key={index}
                                className="bg-[#f5eded6c] border border-white/10 rounded-3xl p-8 hover:border-amber-400/30 transition-all group"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="w-12 h-12 bg-amber-400/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <IconComponent className="w-7 h-7 text-amber-400" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                                <p className="text-gray-900 leading-relaxed">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* What We Do Section */}
            <div className="bg-black py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-amber-400 text-sm tracking-[3px] font-medium">WHAT WE DO</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight text-white">
                            A comprehensive suite of investment<br className="hidden md:block" />
                            services designed for <span className="text-amber-400 font-playfair">Africa</span>
                        </h2>
                    </div>

                    {/* Core Institutional Services */}
                    <div className="mt-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-amber-400" />
                            <span className="uppercase text-sm tracking-widest font-medium text-gray-400">Core Institutional Services</span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {coreServices.map((service, index) => (
                                <div
                                    key={index}
                                    className="group bg-[#111111] rounded-3xl overflow-hidden border shadow-sm shadow-white border-white/50 hover:border-amber-400/40 transition-all duration-500 hover:-translate-y-2"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 200}
                                >
                                    {/* Image */}
                                    <div className="relative h-80 overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            width={800}
                                            height={450}
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-10 bg-white">
                                        <h3 className="text-3xl font-semibold mb-6">{service.title}</h3>
                                        <p className="text-gray-900 leading-relaxed text-[15.5px] mb-10">
                                            {service.description}
                                        </p>

                                        <Link
                                            href={service.link}
                                            className="inline-flex items-center gap-3 text-amber-400 font-medium group-hover:gap-4 transition-all"
                                        >
                                            LEARN MORE
                                            <span className="text-xl">→</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;