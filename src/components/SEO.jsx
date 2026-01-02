import { Helmet } from 'react-helmet-async'

const siteUrl =
  import.meta.env.VITE_SITE_URL ||
  (typeof window !== 'undefined' ? window.location.origin : '')

const buildUrl = (path) => {
  if (!path && siteUrl) return siteUrl
  if (!path) return undefined
  if (path.startsWith('http')) return path
  if (siteUrl) return new URL(path, siteUrl).toString()
  return path
}

export default function SEO({
  title,
  description,
  path = '/',
  image = '/finanshels_logo.png',
  noIndex = false,
  structuredData,
}) {
  const metaTitle = title ? `${title} | Finanshels` : 'Finanshels | Finance, Tax & Compliance for UAE teams'
  const metaDescription =
    description ||
    'Finance, tax, bookkeeping, and compliance support for UAE businesses with transparent SLAs, reporting, and attribution.'
  const canonicalUrl = buildUrl(path)
  const imageUrl = buildUrl(image)
  const robots = noIndex ? 'noindex, nofollow' : 'index, follow'

  const resolvedStructuredData =
    typeof structuredData === 'function'
      ? structuredData({ canonicalUrl: canonicalUrl || buildUrl('/') })
      : structuredData

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta name="robots" content={robots} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {imageUrl && <meta property="og:image" content={imageUrl} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      {resolvedStructuredData && (
        <script type="application/ld+json">{JSON.stringify(resolvedStructuredData)}</script>
      )}
    </Helmet>
  )
}
