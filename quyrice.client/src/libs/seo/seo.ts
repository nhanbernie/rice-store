import { ISeoMetadata } from '@/common/models/seo/seo.model'

export function generateSeoMetadata({ type, data }: ISeoMetadata) {
  const url = `https://localhost:1901/${type}/${data.slug}`
  const title = data.name || data.title
  const description = data.shortDescription || data.description
  // const images = data.images?.length
  //   ? data.images.map(img => `https://your-domain.com${img.url}`)
  //   : [];
  // const images =

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      // type,
      url,
      title,
      description,
      siteName: 'MySite',
      // images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      // images,
    },
  }
}
