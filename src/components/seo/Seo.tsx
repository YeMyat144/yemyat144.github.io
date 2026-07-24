import React from 'react';
import { Helmet } from 'react-helmet';

export const SITE_URL = 'https://yemyatmoe.dev';
export const SITE_NAME = 'Ye Myat Moe';
export const DEFAULT_DESCRIPTION =
  'AI automation engineer in Bangkok building production LLM workflows, n8n systems, and full-stack products.';
export const DEFAULT_IMAGE = `${SITE_URL}/logos/logo.png`;

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'profile' | 'article';
  noindex?: boolean;
};

export const Seo: React.FC<SeoProps> = ({
  title = SITE_NAME,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image,
  type = 'website',
  noindex = false,
}) => {
  const pageTitle = title === SITE_NAME ? title : `${title} · ${SITE_NAME}`;
  const canonical = `${SITE_URL}${path === '/' ? '/' : path}`;
  const ogImage = image
    ? image.startsWith('http')
      ? image
      : `${SITE_URL}/${image.replace(/^\//, '')}`
    : DEFAULT_IMAGE;

  return (
    <Helmet>
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Ye Myat Moe" />
      <meta
        name="robots"
        content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}
      />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@yemyat144" />
    </Helmet>
  );
};
