import Image from "next/image";

export default function TrustedPartners({ title }: { title?: string }) {
    const logos = [
        "/logos/maison.jpeg",
        "/logos/afrexim_bank.png",
        "/logos/ifc.jpg"
    ];

    return (
        <section className="bg-gray-100 py-16 px-6 md:px-20 overflow-hidden">
            <div className="max-w-6xl mx-auto text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-medium text-gray-900">
                    {title || "Trusted by Investors across Africa"}
                </h2>
            </div>

            {/* Marquee */}
            <div className="relative">
                <div className="flex gap-16 items-center animate-marquee">
                    {[...logos].map((logo, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-center min-w-[150px] h-[200px] rounded-lg shadow-sm hover:shadow-md transition"
                        >
                            <Image
                                src={logo}
                                alt="partner logo"
                                className="max-h-32 object-contain opacity-95 hover:opacity-100 transition duration-300"
                                width={400}
                                height={400}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}