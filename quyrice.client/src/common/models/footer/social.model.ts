import { JSX } from 'react'

export interface SocialType {
  name: string
  href: string
  icon: JSX.Element
}

export interface LinkType {
  name: string
  href: string
}

export interface AddressType {
  title: string
  subTitle: string
  links: {
    name: string
    href: string
  }[]
}
