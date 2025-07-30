'use client';

import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  structuredData?: object;
}

export default function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  structuredData
}: SEOHeadProps) {
  const defaultTitle = "Rehmat E Quran - World's Leading Islamic Spiritual Healing Center";
  const defaultDescription = "World's most trusted Islamic spiritual healing center providing expert Quranic treatment, Istikhara consultation, black magic removal, evil eye protection, marriage solutions, and comprehensive spiritual guidance.";
  const defaultKeywords = "Islamic spiritual healing, Quranic treatment, Istikhara consultation, black magic removal, evil eye protection, marriage solutions, spiritual healing Pakistan UAE Saudi Arabia Kuwait Qatar USA Australia UK Europe Malaysia Turkey";
  const defaultImage = "https://static.readdy.ai/image/bc294c6119f7e425505ddb9be20b2472/46703a07e2e92119d9e52ebb6ace0d08.png";

  return (
    <Head>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={canonical || "https://rehmatequran.com"} />
      
      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title || defaultTitle} />
      <meta property="og:description" content={ogDescription || description || defaultDescription} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:url" content={ogUrl || canonical || "https://rehmatequran.com"} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title || defaultTitle} />
      <meta name="twitter:description" content={ogDescription || description || defaultDescription} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </Head>
  );
}