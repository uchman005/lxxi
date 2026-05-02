export default function Approach() {
    return (
        <section className="relative h-[90vh] flex items-center px-6 md:px-20">
            <div className="absolute inset-0 bg-cover bg-center bg-[url('/approach.png')]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F2EAE0]/95 via-[#F2EAE0]/70 to-black/40" />
            <div className="relative z-10 max-w-xl">
                <div className="inline-block bg-yellow-400 text-black px-5 py-2 rounded-full text-sm mb-6">
                    Our Approach to Investment
                </div>
                <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
                    From Opportunity to <br />
                    Executed Investment
                </h1>
                <p className="text-gray-700 text-base leading-relaxed">
                    We deploy capital with a long-term view,<br /> focusing on high-growth
                    markets, strong partnerships,<br /> and real opportunities across Africa.
                </p>
            </div>
        </section>
    );
}