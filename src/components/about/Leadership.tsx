import React from 'react';
import { Instagram, Linkedin, X, } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const leaders = [
  {
    id: 1,
    name: "Victor Ogah Owoicho",
    title: "Managing Director",
    image: "/people/victor.jpg",
    x: "",
    instagram: "",
    linkedin: ""
  },
  {
    id: 2,
    name: "Mgbebu Hilda Chiamaka",
    title: "Head of Finance and Investments",
    image: "/people/hilda.jpg",
    x: "",
    instagram: "",
    linkedin: ""
  },
  {
    id: 3,
    name: "Stephanie Amarachi Patman",
    title: "Managing Director & CEO",
    image: "/people/amara.jpg",
    x: "",
    instagram: "",
    linkedin: ""
  },
  {
    id: 4,
    name: "Ochuwa Mercy Ochibo",
    title: "Head of Operations",
    image: "/people/mercy.jpg",
    x: "",
    instagram: "",
    linkedin: ""
  },
  {
    id: 5,
    name: "Barr. Joan China Anaba",
    title: "Head of Legal & Compliance",
    image: "/people/joan.jpg",
    x: "",
    instagram: "",
    linkedin: ""
  },
];

const Leadership = () => {
  return (
    <div className="bg-[#0A0A0A] py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div>
          <div className="mx-auto">
            <div className="inline-flex items-center bg-amber-400 text-black text-sm font-semibold px-6 py-2.5 rounded-full mb-6">
              Leadership
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed tracking-widest text-center">
              The architects of <span className="text-amber-400 font-playfair">LXXI&apos;s</span> vision
            </h2>
          </div>

        </div>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-gray-300 text-lg text-center leading-relaxed max-w-4xl">
            Our leadership team brings together five years of combined experience across investment banking,
            private equity, development finance, and sovereign capital — united by a shared conviction in the
            power of African enterprise.
          </p>
        </div>

        {/* Leadership Cards Grid - 3 per row on large screens */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={leader.id}
              className="group bg-[#111111] rounded-3xl overflow-hidden border border-white/10 hover:border-amber-400/30 transition-all duration-500 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={800}
                  height={500}
                  loading='lazy'
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 pb-10">
                <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                <p className="text-amber-400 text-sm mb-8">{leader.title}</p>

                {/* Social Icons */}
                <div className="flex items-center gap-4">
                  {leader.instagram && <Link
                    href={leader.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-2xl border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300 group/icon"
                  >
                    <Instagram className="w-5 h-5 group-hover/icon:scale-110 transition-transform" />
                  </Link>}

                  {leader.x && <Link
                    href={leader.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-2xl border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300 group/icon"
                  >
                    <X className="w-5 h-5 group-hover/icon:scale-110 transition-transform" />
                  </Link>}

                  {leader.linkedin && <Link
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-2xl border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300 group/icon"
                  >
                    <Linkedin className="w-5 h-5 group-hover/icon:scale-110 transition-transform" />
                  </Link>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;