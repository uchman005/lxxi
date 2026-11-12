import type { ReactNode } from 'react';
import Link from 'next/link';
import { ShieldAlert, Download, ArrowDown, ArrowRight, FileSignature } from 'lucide-react';

export type LegalTable = {
    headers: string[];
    rows: string[][];
};

export type LegalSubsection = {
    heading: string;
    body?: string[];
    list?: string[];
};

export type LegalSection = {
    id: string;
    heading: string;
    body?: string[];
    list?: string[];
    orderedList?: string[];
    /** Paragraphs rendered after the lists/subsections and before the note. */
    bodyAfter?: string[];
    note?: string;
    table?: LegalTable;
    /** Grouped labeled sub-lists within one section, e.g. "Corporate" / "Authority" / "Product". */
    subsections?: LegalSubsection[];
    /** A short, high-emphasis statement (a core rule or principle) rendered in a black/amber card. Each entry is its own line. */
    highlight?: string[];
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
    /**
     * Call to action pointing at the Client Engagement Form. Shown in the page header, under the
     * "On this page" TOC, and (when it links to another page) as a closing card after the sections.
     * Use "#engagement-form" when the form is rendered on the same page via `children`.
     */
    engagementCta?: { href: string; label: string; description?: string };
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
    engagementCta,
    children,
}: LegalLayoutProps) => {
    const ctaIsSamePage = engagementCta?.href.startsWith('#') ?? false;
    const CtaArrow = ctaIsSamePage ? ArrowDown : ArrowRight;

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

                        {engagementCta && (
                            <CtaLink
                                href={engagementCta.href}
                                className="group inline-flex items-center gap-2 bg-amber-400 text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-amber-300 transition-colors"
                            >
                                <FileSignature className="w-4 h-4" />
                                {engagementCta.label}
                                <CtaArrow className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                            </CtaLink>
                        )}

                        {downloadHref && (
                            <a
                                href={downloadHref}
                                download
                                className={
                                    engagementCta
                                        ? 'inline-flex items-center gap-2 border border-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:border-amber-400 hover:text-amber-400 transition-colors'
                                        : 'inline-flex items-center gap-2 bg-amber-400 text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-amber-300 transition-colors'
                                }
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

                            {engagementCta && (
                                <CtaLink
                                    href={engagementCta.href}
                                    className="mt-6 flex items-center justify-between gap-3 bg-black text-white rounded-xl px-4 py-3.5 hover:bg-amber-400 hover:text-black transition-colors group"
                                >
                                    <span className="text-sm font-semibold">{engagementCta.label}</span>
                                    <CtaArrow className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                                </CtaLink>
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

                                        {section.highlight && (
                                            <div className="bg-black rounded-xl p-6 space-y-2">
                                                {section.highlight.map((line, i) => (
                                                    <p key={i} className="text-amber-400 font-bold text-lg leading-snug">
                                                        {line}
                                                    </p>
                                                ))}
                                            </div>
                                        )}

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

                                        {section.subsections && (
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                                                {section.subsections.map((sub, i) => (
                                                    <div key={i}>
                                                        <h3 className="text-sm font-semibold uppercase tracking-wider text-black mb-3">
                                                            {sub.heading}
                                                        </h3>
                                                        {sub.body?.map((paragraph, j) => (
                                                            <p key={j} className="text-gray-600 leading-relaxed mb-2">
                                                                {paragraph}
                                                            </p>
                                                        ))}
                                                        {sub.list && (
                                                            <ul className="space-y-2">
                                                                {sub.list.map((item, j) => (
                                                                    <li key={j} className="flex gap-2.5 text-gray-600 text-sm leading-relaxed">
                                                                        <span className="mt-2 w-1 h-1 rounded-full bg-amber-400 shrink-0" />
                                                                        <span>{item}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {section.bodyAfter?.map((paragraph, i) => (
                                            <p key={i} className="text-gray-700 leading-relaxed font-medium">
                                                {paragraph}
                                            </p>
                                        ))}

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

                        {engagementCta && !ctaIsSamePage && (
                            <div
                                className="mt-16 relative overflow-hidden bg-[#0A0A0A] text-white rounded-3xl p-8 md:p-10"
                                data-aos="fade-up"
                            >
                                <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
                                <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                    <div className="max-w-xl">
                                        <h2 className="text-2xl font-bold mb-2">
                                            Ready to <span className="font-playfair italic text-amber-400">engage</span> LXXI?
                                        </h2>
                                        {engagementCta.description && (
                                            <p className="text-gray-400 leading-relaxed">{engagementCta.description}</p>
                                        )}
                                    </div>
                                    <CtaLink
                                        href={engagementCta.href}
                                        className="group inline-flex items-center justify-center gap-2 bg-amber-400 text-black text-sm font-semibold px-6 py-3 rounded-full hover:bg-amber-300 transition-colors shrink-0"
                                    >
                                        <FileSignature className="w-4 h-4" />
                                        {engagementCta.label}
                                        <CtaArrow className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                                    </CtaLink>
                                </div>
                            </div>
                        )}

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

/** Same-page anchors use a plain <a> so the browser scrolls natively; other routes use next/link. */
function CtaLink({ href, className, children }: { href: string; className: string; children: ReactNode }) {
    if (href.startsWith('#')) {
        return (
            <a href={href} className={className}>
                {children}
            </a>
        );
    }
    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    );
}

export default LegalLayout;
