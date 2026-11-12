const SITE_URL = 'https://lxxi.africa';

const services = [
  {
    name: 'Private Equity & Private Credit',
    description:
      'Connecting businesses seeking investment or financing with institutional investors, private capital providers, lenders and strategic investment partners.',
  },
  {
    name: 'Real Estate',
    description:
      'Facilitating property acquisitions, disposals, development financing, real estate investments and strategic property partnerships.',
  },
  {
    name: 'Infrastructure & Capital Goods',
    description:
      'Structuring financing and commercial partnerships for infrastructure, industrial equipment, transportation assets, energy projects and other productive assets.',
  },
  {
    name: 'Commodity Trading',
    description:
      'Facilitating structured transactions involving agricultural commodities, minerals, metals and energy products, connecting verified suppliers with qualified international buyers.',
  },
  {
    name: 'Strategic Investments & Partnerships',
    description:
      'Originating opportunities, structuring transactions and bringing together the right financial and commercial partners to execute complex business projects.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'LXXI Limited',
      alternateName: 'LXXI',
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      slogan: 'Defined by Purpose. Driven by Africa.',
      description:
        'LXXI Limited is an African-focused investment, structured brokerage and strategic transaction facilitation company headquartered in Abuja, Nigeria. It exists to make African opportunities investable, African businesses financeable and African assets commercially productive by connecting capital, expertise and strategic partnerships.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Abuja',
        addressCountry: 'NG',
      },
      areaServed: { '@type': 'Place', name: 'Africa' },
      email: 'business@lxxi.africa',
      telephone: '+234-802-502-1402',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'business inquiries',
        email: 'business@lxxi.africa',
        telephone: '+234-802-502-1402',
        areaServed: 'Africa',
        availableLanguage: 'English',
      },
      knowsAbout: [
        ...services.map((s) => s.name),
        'Structured brokerage',
        'Transaction structuring',
        'Capital mobilisation',
        'African investment',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'LXXI Limited services',
        itemListElement: services.map((s) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: s.name,
            description: s.description,
            areaServed: 'Africa',
            provider: { '@id': `${SITE_URL}/#organization` },
          },
        })),
      },
      sameAs: [
        'https://www.linkedin.com/company/lxxi/',
        'https://x.com/LXXILimited',
        'https://www.instagram.com/lxxibrokerage/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'LXXI Limited',
      url: SITE_URL,
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
};

export default function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
      }}
    />
  );
}
