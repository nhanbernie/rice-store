export interface SeoType {
  [key: string]: Partial<SeoItems>
}

export interface SeoItems {
  title: string
  description: string
  keywords: string
  image?: string
  url?: string
  author?: string
  type?: string
  twitterUsername?: string
}
