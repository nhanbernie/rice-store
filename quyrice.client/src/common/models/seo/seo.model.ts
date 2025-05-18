export interface SeoType {
  [key: string]: Partial<ISeoItems>
}

export interface ISeoItems {
  title: string
  description: string
  keywords: string
  image?: string
  url?: string
  author?: string
  type?: string
  twitterUsername?: string
  openGraph?: {
    title?: string
    description?: string
    images?: string
    url?: string
    type?: string
  }
}

export interface ISeoMetadata {
  type: string
  data: {
    slug: string
    name?: string
    title?: string
    shortDescription?: string
    description?: string
    images?: Array<{ url: string }>
  }
}
