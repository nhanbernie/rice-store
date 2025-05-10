"use server"
import Head from 'next/head'
import { ISeoItems } from '@/common/models/seo/seo.model'
import { Metadata, ResolvedMetadata } from 'next'
const SEO = ({
  title,
  description,
  keywords,
  author,
  image,
  url,
  type,
  twitterUsername,
}: ISeoItems) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}

export default SEO
