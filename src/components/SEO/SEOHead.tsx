import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  url?: string;
}

const defaultSEO = {
  title: 'Air Commodore (R) Sajad Haider - Saviour of Lahore | Pakistan Air Force Hero',
  description: 'Official website of Air Commodore (Retired) Sajad Haider, hero of the 1965 and 1971 wars, Saviour of Lahore, and distinguished Pakistan Air Force pilot. Explore his life, achievements, and contributions to Pakistan\'s defense.',
  keywords: 'Sajad Haider, Air Commodore, Pakistan Air Force, PAF, 1965 War, 1971 War, Saviour of Lahore, Pathankot Strike, Fighter Pilot, Pakistan Military History',
  image: '/og-image.jpg',
  type: 'website',
  siteName: 'Sajad Haider - Official Website',
  twitterHandle: '@SajadHaider',
};

export default function SEOHead({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  image = defaultSEO.image,
  type = defaultSEO.type,
  url,
}: SEOHeadProps) {
  const location = useLocation();
  const currentUrl = url || `${window.location.origin}${location.pathname}`;
  const fullImageUrl = image.startsWith('http') ? image : `${window.location.origin}${image}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic SEO
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Sajad Haider');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'English');

    // Open Graph
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', fullImageUrl, 'property');
    updateMetaTag('og:url', currentUrl, 'property');
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:site_name', defaultSEO.siteName, 'property');
    updateMetaTag('og:locale', 'en_US', 'property');

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', fullImageUrl);
    updateMetaTag('twitter:site', defaultSEO.twitterHandle);
    updateMetaTag('twitter:creator', defaultSEO.twitterHandle);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // Structured Data (JSON-LD)
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Sajad Haider',
      alternateName: 'Air Commodore (R) Sajad Haider',
      jobTitle: 'Retired Air Commodore',
      worksFor: {
        '@type': 'Organization',
        name: 'Pakistan Air Force',
      },
      description: description,
      url: currentUrl,
      image: fullImageUrl,
      sameAs: [
        // Add social media links if available
      ],
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, [title, description, keywords, image, type, currentUrl, fullImageUrl]);

  return null;
}
