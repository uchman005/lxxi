import type { MetadataRoute } from 'next';

const BASE_URL = 'https://lxxi.africa';

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
        { path: '/', priority: 1, changeFrequency: 'weekly' },
        { path: '/about', priority: 0.9, changeFrequency: 'monthly' },
        { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
        { path: '/sectors', priority: 0.9, changeFrequency: 'monthly' },
        { path: '/approach', priority: 0.8, changeFrequency: 'monthly' },
        { path: '/investors', priority: 0.8, changeFrequency: 'monthly' },
        { path: '/opportunities', priority: 0.8, changeFrequency: 'weekly' },
        { path: '/insights', priority: 0.8, changeFrequency: 'weekly' },
        { path: '/news', priority: 0.7, changeFrequency: 'weekly' },
        { path: '/what-we-do', priority: 0.6, changeFrequency: 'monthly' },
        { path: '/careers', priority: 0.6, changeFrequency: 'weekly' },
        { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
        { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
        { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
        { path: '/cookies', priority: 0.3, changeFrequency: 'yearly' },
        { path: '/disclosures', priority: 0.3, changeFrequency: 'yearly' },
    ];

    return routes.map((route) => ({
        url: `${BASE_URL}${route.path}`,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
