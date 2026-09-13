import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
  structuredData?: Record<string, any>;
}

const defaultConfig = {
  title: 'Sajad Haider - Saviour of Lahore | Pakistan Air Force Hero',
  description: 'Sajad Haider, Pakistan Air Force hero, Saviour of Lahore. 1965 & 1971 war veteran, Pathankot Strike leader.',
  keywords: 'Sajad Haider, Sajjad Haider, Air Commodore, Pakistan Air Force, PAF, 1965 War, 1971 War, Saviour of Lahore',
  image: '/og-image.jpg',
  type: 'website',
};

export function useSEO(config: SEOConfig = {}) {
  const location = useLocation();
  const seo = { ...defaultConfig, ...config };
  const currentUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}${location.pathname}`
    : `https://sajadhaider.com${location.pathname}`;
  const fullImageUrl = seo.image?.startsWith('http') 
    ? seo.image 
    : (typeof window !== 'undefined' ? window.location.origin : 'https://sajadhaider.com') + seo.image;

  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.title = seo.title || defaultConfig.title;

    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMeta('description', seo.description || defaultConfig.description);
    updateMeta('keywords', seo.keywords || defaultConfig.keywords);
    updateMeta('robots', seo.noindex ? 'noindex, nofollow' : 'index, follow');
    updateMeta('author', 'Sajad Haider');
    updateMeta('language', 'English');
    updateMeta('revisit-after', '7 days');

    // Open Graph
    updateMeta('og:title', seo.title || defaultConfig.title, true);
    updateMeta('og:description', seo.description || defaultConfig.description, true);
    updateMeta('og:image', fullImageUrl, true);
    updateMeta('og:url', currentUrl, true);
    updateMeta('og:type', seo.type || 'website', true);
    updateMeta('og:site_name', 'Sajad Haider - Official Website', true);
    updateMeta('og:locale', 'en_US', true);
    updateMeta('og:updated_time', new Date().toISOString(), true);

    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', seo.title || defaultConfig.title);
    updateMeta('twitter:description', seo.description || defaultConfig.description);
    updateMeta('twitter:image', fullImageUrl);
    updateMeta('twitter:site', '@SajadHaider');
    updateMeta('twitter:creator', '@SajadHaider');

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // Structured Data (JSON-LD)
    if (seo.structuredData) {
      let script = document.querySelector('script[type="application/ld+json"][data-seo="true"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-seo', 'true');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(seo.structuredData);
    }
  }, [seo, currentUrl, fullImageUrl]);
}
