import { useEffect } from 'react';

/**
 * SEO Component to dynamically update document metadata and schema markup.
 * Supports zero-dependency header updates and Google JSON-LD schema injection.
 */
const SEO = ({ title, description, keywords, schema }) => {
  useEffect(() => {
    // 1. Update dynamic page Title
    if (title) {
      document.title = `${title} | NAH44`;
    } else {
      document.title = 'NAH44 — Insurance, Loans & Compliance';
    }

    // 2. Update dynamic meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    if (description) {
      metaDescription.setAttribute('content', description);
    }

    // 3. Update dynamic meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    if (keywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // 4. Manage dynamic JSON-LD Structured Schema
    const oldSchemaScript = document.getElementById('nah44-jsonld-schema');
    if (oldSchemaScript) {
      oldSchemaScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'nah44-jsonld-schema';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    // Cleanup schema script on unmount to keep the head pristine
    return () => {
      const currentSchemaScript = document.getElementById('nah44-jsonld-schema');
      if (currentSchemaScript) {
        currentSchemaScript.remove();
      }
    };
  }, [title, description, keywords, schema]);

  return null;
};

export default SEO;
