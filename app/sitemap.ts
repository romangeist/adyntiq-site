import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.adyntiq.com";

    return [
        {
            url: baseUrl,
            lastModified: new Date("2026-09-01"),
            changeFrequency: "weekly",
            priority: 1
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date("2026-07-23"),
            changeFrequency: "monthly",
            priority: 0.9
        },
        {
            url: `${baseUrl}/case-studies/production-inquiry-workflow`,
            lastModified: new Date("2026-09-01"),
            changeFrequency: "monthly",
            priority: 0.85
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date("2026-09-01"),
            changeFrequency: "monthly",
            priority: 0.7
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date("2026-09-01"),
            changeFrequency: "monthly",
            priority: 0.8
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date("2026-07-21"),
            changeFrequency: "yearly",
            priority: 0.3
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date("2026-07-21"),
            changeFrequency: "yearly",
            priority: 0.3
        }
    ];
}
