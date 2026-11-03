export default function Board() {
    const boardMembers = [
        {
            name: "Patrick Mgbebu",
            title: "BOARD CHAIRMAN",
        },
        {
            name: "Judith Mgbebu",
            title: "NON-EXECUTIVE DIRECTOR",
        }
    ];
    return (
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
    )
}