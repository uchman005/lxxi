import type { ReactNode } from 'react';
import { ShieldAlert, Download, ArrowDown } from 'lucide-react';

export type LegalTable = {
    headers: string[];
    rows: string[][];
};

export type LegalSection = {
    id: string;
    heading: string;
    body?: string[];
    list?: string[];
    orderedList?: string[];
    note?: string;
    table?: LegalTable;
};

type LegalLayoutProps = {
    title: string;
    accent?: string;
    lastUpdated: string;
    intro: string;
    sections: LegalSection[];
    downloadHref?: string;
    downloadLabel?: string;
    hideDraftNotice?: boolean;
    /** Rendered as an extra, highlighted entry in the "On this page" TOC, linking to an anchor in `children`. */
    extraTocLink?: { id: string; label: string };
    /** Rendered after the numbered sections, still inside the page's <main>. */
    children?: ReactNode;
};

const LegalLayout = ({
    title,
    accent,
    lastUpdated,
    intro,
    sections,
    downloadHref,
    downloadLabel = 'Download PDF',
    hideDraftNotice = true,
    extraTocLink,
    children,
}: LegalLayoutProps) => {
    return (
        <main className="bg-white text-black">
            {/* Header */}
            <section className="relative bg-[#0A0A0A] text-white overflow-hidden pt-32 md:pt-40 pb-16 md:pb-20">
                <div className="absolute top-0 left-1/4 w-[36rem] h-[36rem] bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="flex items-center gap-3 mb-6" data-aos="fade-down">
                        <div className="h-px w-12 bg-amber-400" />
                        <span className="text-amber-400 text-sm tracking-[3px] font-medium uppercase">
                            Legal
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-4" data-aos="fade-up">
                        {title}
                        {accent && (
                            <>
                                {' '}
                                <span className="font-playfair italic text-amber-400">{accent}</span>
                            </>
                        )}
                    </h1>
                    <div
                        className="flex flex-wrap items-center gap-4"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <p className="text-gray-400 text-sm">Last updated: {lastUpdated}</p>

                        {downloadHref && (
                            <a
                                href={downloadHref}
                                download
                                className="inline-flex items-center gap-2 bg-amber-400 text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-amber-300 transition-colors"
                            >
                                <Download className="w-4 h-4" />
                                {downloadLabel}
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Body */}
            <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* TOC */}
                    <aside className="lg:col-span-4 xl:col-span-3">
                        <div className="lg:sticky lg:top-28">
                            <h2 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
                                On this page
                            </h2>
                            <nav>
                                <ul className="space-y-2.5">
                                    {sections.map((section, index) => (
                                        <li key={section.id}>
                                            <a
                                                href={`#${section.id}`}
                                                className="group flex gap-3 text-sm text-gray-600 hover:text-amber-500 transition-colors"
                                            >
                                                <span className="text-amber-400 font-semibold tabular-nums">
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                                {section.heading}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            {extraTocLink && (
                                <a
                                    href={`#${extraTocLink.id}`}
                                    className="mt-6 flex items-center justify-between gap-3 bg-black text-white rounded-xl px-4 py-3.5 hover:bg-amber-400 hover:text-black transition-colors group"
                                >
                                    <span className="text-sm font-semibold">{extraTocLink.label}</span>
                                    <ArrowDown className="w-4 h-4 shrink-0 group-hover:translate-y-0.5 transition-transform" />
                                </a>
                            )}

                            {/* Draft notice */}
                            {!hideDraftNotice && (
                                <div className="mt-8 flex gap-3 bg-amber-400/10 border border-amber-400/30 rounded-xl p-4">
                                    <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        This is a working draft for illustrative purposes and should be reviewed
                                        by qualified legal counsel before publication.
                                    </p>
                                </div>
                            )}
                        </div>
                    </aside>

                    {/* Content */}
                    <div className="lg:col-span-8 xl:col-span-9">
                        <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl" data-aos="fade-up">
                            {intro}
                        </p>

                        <div className="space-y-12">
                            {sections.map((section, index) => (
                                <div key={section.id} id={section.id} className="scroll-mt-28" data-aos="fade-up">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-5 flex items-baseline gap-3">
                                        <span className="text-amber-400 text-lg font-semibold tabular-nums">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        {section.heading}
                                    </h2>
                                    <div className="space-y-4 max-w-3xl">
                                        {section.body?.map((paragraph, i) => (
                                            <p key={i} className="text-gray-600 leading-relaxed">
                                                {paragraph}
                                            </p>
                                        ))}

                                        {section.list && (
                                            <ul className="space-y-2.5">
                                                {section.list.map((item, i) => (
                                                    <li key={i} className="flex gap-3 text-gray-600 leading-relaxed">
                                                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {section.orderedList && (
                                            <ol className="space-y-3">
                                                {section.orderedList.map((item, i) => (
                                                    <li key={i} className="flex gap-4 text-gray-600 leading-relaxed">
                                                        <span className="w-7 h-7 rounded-full bg-black text-amber-400 text-xs font-semibold flex items-center justify-center shrink-0 tabular-nums">
                                                            {i + 1}
                                                        </span>
                                                        <span className="pt-0.5">{item}</span>
                                                    </li>
                                                ))}
                                            </ol>
                                        )}

                                        {section.note && (
                                            <div className="flex gap-3 bg-amber-400/10 border border-amber-400/30 rounded-xl p-4">
                                                <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                                <p className="text-sm text-gray-700 leading-relaxed">{section.note}</p>
                                            </div>
                                        )}

                                        {section.table && (
                                            <div className="overflow-x-auto rounded-xl border border-black/10">
                                                <table className="w-full text-left border-collapse">
                                                    <thead>
                                                        <tr className="bg-black text-white">
                                                            {section.table.headers.map((header, i) => (
                                                                <th
                                                                    key={i}
                                                                    className="px-5 py-3 text-xs font-semibold uppercase tracking-wider whitespace-nowrap"
                                                                >
                                                                    {header}
                                                                </th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {section.table.rows.map((row, i) => (
                                                            <tr
                                                                key={i}
                                                                className="border-t border-black/10 even:bg-black/[0.02]"
                                                            >
                                                                {row.map((cell, j) => (
                                                                    <td
                                                                        key={j}
                                                                        className="px-5 py-3 text-gray-600 whitespace-nowrap"
                                                                    >
                                                                        {cell}
                                                                    </td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 pt-8 border-t border-black/10">
                            <p className="text-sm text-gray-500">
                                Questions about this policy? Contact us at{' '}
                                <a
                                    href="mailto:business@lxxi.africa"
                                    className="text-amber-500 font-medium hover:text-amber-600 transition-colors"
                                >
                                    business@lxxi.africa
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {children}
        </main>
    );
};

export default LegalLayout;
