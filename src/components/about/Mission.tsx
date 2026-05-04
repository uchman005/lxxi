export default function Mission() {
    return (
        <section className="relative bg-[#F2EAE0] py-16 md:py-24 px-6 md:px-20 overflow-hidden">

            {/* Decorative lines (top-right) */}
            <div className="hidden md:block absolute top-0 right-0 w-72 h-72 border-t border-r border-yellow-300 opacity-40" />
            <div className="hidden md:block absolute top-6 right-6 w-72 h-72 border-t border-r border-yellow-300 opacity-30" />
            <div className="hidden md:block absolute top-12 right-12 w-72 h-72 border-t border-r border-yellow-300 opacity-20" />

            <div className="max-w-5xl mx-auto text-center md:text-left">

                {/* Badge */}
                <div className="inline-block bg-yellow-400 text-black px-4 py-1.5 rounded-full text-sm mb-6">
                    Our mission
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-snug mb-4 max-w-2xl">
                    Bridging international markets and African enterprise
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0 mb-10">
                    Our mission is to establish LXXI as the ultimate bridge for international and domestic commerce, enabling businesses and subsidiaries to operate, trade, and scale across borders with confidence and precision.
                </p>

                {/* Image */}
                <div className="flex justify-center md:justify-start">
                    <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="/about_mission.png"
                            alt="Africa network map"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}