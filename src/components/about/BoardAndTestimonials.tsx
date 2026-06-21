import Image from "next/image";

const boardMembers = [
    {
        name: "Prof. Chinua Eze",
        title: "BOARD CHAIRMAN",
    },
    {
        name: "Fatima Al-Sayed",
        title: "INDEPENDENT DIRECTOR",
    },
    {
        name: "Dr. Samuel Bediako",
        title: "AUDIT COMMITTEE CHAIR",
    },
];

const BoardAndTestimonials = () => {
    return (
        <>
            {/* Board of Directors Section */}
            <div className="bg-black py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left Info */}
                        <div className="lg:col-span-5">
                            <div className="inline-block bg-white text-black text-xs tracking-widest font-semibold px-5 py-2 rounded-full mb-6">
                                BOARD OF DIRECTORS
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
                                Our independent Board brings global governance standards to African capital markets.
                            </h2>
                        </div>

                        {/* Board Members Grid */}
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {boardMembers.map((member, index) => (
                                    <div
                                        key={index}
                                        className="group bg-[#111111] rounded-3xl overflow-hidden border border-white/10 hover:border-amber-400/30 transition-all duration-500 hover:-translate-y-1"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 150}
                                    >
                                        {/* <div className="relative h-72">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={400}
                                                height={400}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent" />
                                        </div> */}
                                        <div className="p-6">
                                            <h3 className="font-semibold text-lg">{member.name}</h3>
                                            <p className="text-amber-400 text-sm mt-1 font-playfair leading-relaxed">{member.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Left Text */}
                        <div className="lg:col-span-5">
                            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                                Our Client reviews
                            </h2>
                            <p className="mt-6 text-lg text-gray-600 max-w-md">
                                Discover the insights from our clients regarding their experience with LXXI
                            </p>
                        </div>

                        {/* Video/Testimonial Card */}
                        <div className="lg:col-span-7">
                            <div className="relative bg-black rounded-3xl overflow-hidden aspect-video max-w-2xl mx-auto lg:mx-0 cursor-pointer group">
                                <Image
                                    src="/carousel1.png"
                                    alt="Client Testimonial"
                                    width={800}
                                    height={450}
                                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
                                />

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                                        <div className="w-0 h-0 border-t-12 border-t-transparent border-l-18 border-l-black border-b-12 border-b-transparent ml-1" />
                                    </div>
                                </div>

                                {/* Glowing Accent */}
                                <div className="absolute bottom-8 right-8 w-24 h-24 bg-linear-to-br from-amber-400 to-yellow-300 rounded-xl rotate-12 opacity-80 blur-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BoardAndTestimonials;