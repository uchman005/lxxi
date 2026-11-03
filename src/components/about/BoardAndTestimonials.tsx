import Image from "next/image";
import Board from "./Board";

const BoardAndTestimonials = () => {
    return (
        <>
            {/* Board of Directors Section */}
            <Board />
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