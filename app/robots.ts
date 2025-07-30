
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '/api/internal/',
          '/temp/',
          '/_next/',
          '/node_modules/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '/api/internal/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '/api/internal/',
        ],
      },
    ],
    sitemap: 'https://rehmatequran.com/sitemap.xml',
    host: 'https://rehmatequran.com',
  }
}
