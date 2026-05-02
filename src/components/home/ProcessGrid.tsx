import {
    Search,
    BadgeDollarSign,
    Users,
    ShieldCheck,
} from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Identify Opportunities",
        description:
            "We take a research-driven approach to uncover opportunities others overlook. By acting early and thinking long-term, we position capital where real value is being created.",
        icon: Search,
    },
    {
        number: "02",
        title: "Structure Deals",
        description:
            "Each transaction is carefully structured to balance risk, return, and liquidity expectations with clear documentation, transparent terms, and alignment between all participating parties.",
        icon: BadgeDollarSign,
    },
    {
        number: "03",
        title: "Collaboration",
        description:
            "We work closely with trusted local partners, operators, and co-investors. These relationships give us deeper insight and access to opportunities that require strong on-ground presence.",
        icon: Users,
    },
    {
        number: "04",
        title: "Support Execution",
        description:
            "LXXI remains actively engaged through transaction close and beyond — coordinating legal, compliance, and operational workstreams to ensure smooth execution and ongoing investor reporting.",
        icon: ShieldCheck,
    },
];

export default function ProcessGrid() {
    return (
        <section className="bg-gray-100 py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                {steps.map((step, i) => {
                    const Icon = step.icon;

                    return (
                        <div
                            key={i}
                            className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Icon */}
                            <div className="mb-4">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-yellow-400 text-yellow-500 group-hover:bg-yellow-400 group-hover:text-black transition">
                                    <Icon size={18} />
                                </div>
                            </div>

                            {/* Number + Title */}
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-gray-400 text-sm font-medium">
                                    {step.number}
                                </span>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {step.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}