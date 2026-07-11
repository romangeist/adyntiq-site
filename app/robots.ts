import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/"]
        },
        sitemap: "https://adyntiq.com/sitemap.xml",
        host: "https://adyntiq.com"
    };
}