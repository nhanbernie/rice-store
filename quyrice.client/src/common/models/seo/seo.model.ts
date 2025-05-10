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
}
